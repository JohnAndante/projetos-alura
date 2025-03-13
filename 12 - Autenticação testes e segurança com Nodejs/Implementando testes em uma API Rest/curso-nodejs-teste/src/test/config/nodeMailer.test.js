import { describe, it } from '@jest/globals';
import nodemailer from 'nodemailer';
import 'dotenv/config';

/**
 * - O sistema deve validar se a conexão com o sistema de e-mail está funcionando corretamente.
 * - O sistema deve enviar um e-mail
 */

const transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL,
    },
});

const verificarConexao = () => new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
        if (error) {
            reject(error);
        } else {
            resolve(success);
        }
    });
});

describe('Teste de envio de e-mail', () => {
    it('Deve testar a conexão com o e-mail', async () => {
        const conexao = await verificarConexao();
        expect(conexao).toBe(true);
    });

    it('O sistema deve enviar um email', async () => {
        const dadosEmailMock = {
            from: '"Fred Foo" <foo@example.com>',
            to: 'teste@teste.com',
            subject: 'Aluguel de Livro',
            text: 'Olá, Teste! Você alugou o livro Harry Potter e o Cálice de Fogo por 5 dias.',
        };
        const info = await transporter.sendMail(dadosEmailMock);
        expect(info.accepted[0]).toBe(dadosEmailMock.to);
    });
});
