import request from 'supertest';
import {
    describe, expect, it, jest,
} from '@jest/globals';
import app from '../../app.js';

let server;
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ0ZXN0LXVzZXJAZW1haWwuY29tIiwiaWF0IjoxNzQxMDYxNDIyLCJleHAiOjE3NDExNDc4MjJ9.HdCl3lb2Hg00nuJelhHgwemSxuMp1KMTMQuHSnb7dvA';

beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('GET em /editoras', () => {
    it('Deve retornar uma lista de editoras', async () => {
        const resposta = await request(app)
            .get('/editoras')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${accessToken}`)
            .expect(200);

        expect(resposta.body[0].email).toEqual('e@e.com');
    });
});

let idResposta;
describe('POST em /editoras', () => {
    it('Deve adicionar uma nova editora', async () => {
        const resposta = await request(app)
            .post('/editoras')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({
                nome: 'CDC',
                cidade: 'Sao Paulo',
                email: 's@s.com',
            })
            .expect(201);

        idResposta = resposta.body.content.id;
    });
    it('Deve nao adicionar nada ao passar o body vazio', async () => {
        await request(app)
            .post('/editoras')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({})
            .expect(400);
    });
});

describe('GET em /editoras/id', () => {
    it('Deve retornar recurso selecionado', async () => {
        await request(app)
            .get(`/editoras/${idResposta}`)
            .set('Authorization', `Bearer ${accessToken}`)
            .expect(200);
    });
});

describe('PUT em /editoras/id', () => {
    test.each([
        ['nome', { nome: 'Casa do Codigo' }],
        ['cidade', { cidade: 'SP' }],
        ['email', { email: 'cdc@cdc.com' }],
    ])('Deve alterar o campo %s', async (chave, param) => {
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');
        await requisicao.request(app)
            .put(`/editoras/${idResposta}`)
            .set('Authorization', `Bearer ${accessToken}`)
            .send(param)
            .expect(204);

        expect(spy).toHaveBeenCalled();
    });
});

describe('DELETE em /editoras/id', () => {
    it('Deletar o recurso adcionado', async () => {
        await request(app)
            .delete(`/editoras/${idResposta}`)
            .set('Authorization', `Bearer ${accessToken}`)
            .expect(200);
    });
});
