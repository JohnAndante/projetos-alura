/**
 * - O login deve possuir um email e senha para se autenticar
 * - O login deve validar se o usuario está cadastrado
 * - O login deve validar se o email e a senha estão corretos
 * - O login deve validar se está sendo retornado um accessToken
 */
import request from 'supertest';
import {
    afterEach, beforeEach, describe, it,
} from '@jest/globals';
import app from '../../app';

let server;

beforeEach(() => {
    server = app.listen(4000);
});

afterEach(() => {
    server.close();
});

describe('Testando a rota POST /auth/login', () => {
    it.each([
        ['email', { senha: '123456' }],
        ['senha', { email: 'teste-123123@email.com' }],
    ])('Deve retornar status 400 ao tentar fazer login sem %s', async (campo, login) => {
        const loginMock = login;

        await request(app)
            .post('/login')
            .send(loginMock)
            .expect(500)
            .then((response) => {
                expect(response.body).toBe(`O campo ${campo} do usuário é obrigatório.`);
            });
    });

    it('Deve validar se o usuário está cadastrado', () => {
        const login = {
            email: 'test-user-1@email.com',
            senha: '123456',
        };

        request(app)
            .post('/login')
            .send(login)
            .expect(500)
            .then((response) => {
                expect(response.body).toBe('Usuário não cadastrado.');
            });
    });

    it('Deve validar se o campo senha está correto', () => {
        const login = {
            email: 'test-user@email.com',
            senha: '1234567',
        };

        request(app)
            .post('/login')
            .send(login)
            .expect(500)
            .then((response) => {
                expect(response.body).toBe('Usuário ou senha invalido.');
            });
    });

    it('Deve validar se está sendo retornado um token no campo "accessToken"', () => {
        const login = {
            email: 'test-user@email.com',
            senha: '123456',
        };

        request(app)
            .post('/login')
            .send(login)
            .expect(201)
            .then((response) => {
                expect(response.body).toHaveProperty('accessToken');
            });
    });
});
