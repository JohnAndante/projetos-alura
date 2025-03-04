import { describe, it } from '@jest/globals';
import AuthService from '../../services/authService';
import dbConfig from '../../db/dbconfig';

describe('Testando a authService.cadastrarUsuario', () => {
    it.each([
        ['nome', { email: 'test@email.com', senha: '123456' }],
        ['email', { nome: 'Test User', senha: '123456' }],
        ['senha', { nome: 'Test User', email: 'test@email.com' }],
    ])('Deve retornar erro quando %s estiver faltando', async (campo, dadosUsuario) => {
        await expect(AuthService.cadastrarUsuario(dadosUsuario))
            .rejects
            .toThrow();
    });

    it('Deve criptografar a senha do usuário', async () => {
        const dadosUsuario = {
            nome: 'Test User',
            email: `test${Math.random()}@email.com`,
            senha: '123456',
        };

        const usuario = await AuthService.cadastrarUsuario(dadosUsuario);

        expect(usuario.senha).not.toEqual(dadosUsuario.senha);

        dbConfig('usuarios').where('id', usuario.id).del();
    });

    it('Deve impedir o cadastro de um usuário com email duplicado', async () => {
        const dadosUsuario = {
            nome: 'Test User',
            email: 'test-user@email.com',
            senha: '123456',
        };

        const cadastro = AuthService.cadastrarUsuario(dadosUsuario);

        await expect(cadastro)
            .rejects
            .toThrowError('Email já cadastrado.');
    });

    it('Deve retornar uma mensagem informado que o cadastro foi realizado com sucesso', async () => {
        const dadosUsuario = {
            nome: 'Test User',
            email: `test${Math.random()}@email.com`,
            senha: '123456',
        };

        const resposta = await AuthService.cadastrarUsuario(dadosUsuario);

        expect(resposta).toHaveProperty('message', 'usuario criado');

        dbConfig('usuarios').where('id', resposta.content.id).del();
    });

    it('Deve retornar as informações corretamente ao cadastrar um usuário', async () => {
        const dadosUsuario = {
            nome: 'Test User',
            email: `test${Math.random()}email.com`,
            senha: '123456',
        };

        const resposta = await AuthService.cadastrarUsuario(dadosUsuario);

        expect(resposta).toHaveProperty('content');
        expect(resposta.content).toHaveProperty('nome', dadosUsuario.nome);
        expect(resposta.content).toHaveProperty('email', dadosUsuario.email);

        dbConfig('usuarios').where('id', resposta.content.id).del();
    });
});
