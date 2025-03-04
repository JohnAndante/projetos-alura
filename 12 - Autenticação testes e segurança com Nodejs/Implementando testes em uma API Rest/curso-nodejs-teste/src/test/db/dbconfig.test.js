import { describe, expect, it } from '@jest/globals';
import dbConfig from '../../db/dbconfig';

/**
 * - Teste de conexão com o banco de dados
 * - Deve retornar o autor registrado na tabela autores
 */

describe('Teste de conexão com o banco de dados', () => {
    it('Deve se conectar com o banco de dados', async () => {
        const autorMock = {
            nome: 'Josias',
            nacionalidade: 'Brasileiro',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        const autorSalvo = await dbConfig('autores').insert(autorMock);

        const autor = await dbConfig('autores').where('id', autorSalvo[0]).first();

        expect(autor).toEqual({
            id: autorSalvo[0],
            ...autorMock,
        });

        await dbConfig('autores').where('id', autorSalvo[0]).del();
    });

    it('Deve retornar o autor registrado na tabela autores', async () => {
        const autorMock = {
            nome: 'Josias Andrade',
            nacionalidade: 'Brasileiro',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        const autorSalvo = await dbConfig('autores').insert(autorMock);

        const autor = await dbConfig('autores').where('id', autorSalvo[0]).first();

        expect(autor).toEqual({
            id: autorSalvo[0],
            ...autorMock,
        });

        await dbConfig('autores').where('id', autorSalvo[0]).del();
    });
});
