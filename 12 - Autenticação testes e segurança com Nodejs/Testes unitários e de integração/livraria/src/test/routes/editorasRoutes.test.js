import request from 'supertest';
import { jest } from '@jest/globals';
import app from '../../app';

let server = null;

beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('GET /editoras', () => {
    it('Deve retornar uma lista de editoras', async () => {
        const resposta = await request(server)
            .get('/editoras')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(resposta.body[0].email).toContain('@');
    });
});

let idResposta;

describe('POST /editoras', () => {
    it('Deve adicionar uma nova editora', async () => {
        const resposta = await request(server)
            .post('/editoras')
            .send({
                nome: 'Editora Teste',
                cidade: 'São Paulo',
                email: 'editora.teste@saopaulo.com',
            })
            .expect(201);

        idResposta = resposta.body.content.id;
    });

    it('Deve não adicionar uma nova editora ao enviar um body vazio', async () => {
        await request(server)
            .post('/editoras')
            .send({})
            .expect(400);
    });
});

describe('GET /editoras/:id', () => {
    it('Deve retornar o recurso selecionado', async () => {
        await request(server)
            .get(`/editoras/${idResposta}`)
            .expect(200);
    });
});

describe('PUT /editoras/:id', () => {
    it.each([
        ['nome', { nome: 'Editora Teste Alterada' }],
        ['cidade', { cidade: 'São Paulo' }],
        ['email', { email: 'editora-teste-alterada@email.com' }],
    ])('Deve alterar o campo %s da editora', async (chave, param) => {
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');

        await requisicao.request(server)
            .put(`/editoras/${idResposta}`)
            .send(param)
            .expect(204);

        expect(spy).toHaveBeenCalled();
    });
});

describe('DELETE /editoras/:id', () => {
    it('Deletar o recurso adicionado', async () => {
        await request(server)
            .delete(`/editoras/${idResposta}`)
            .expect(200);
    });
});
