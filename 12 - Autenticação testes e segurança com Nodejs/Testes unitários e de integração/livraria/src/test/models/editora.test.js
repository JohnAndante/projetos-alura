import { jest } from '@jest/globals';
import Editora from '../../models/editora';

describe('Testando o modelo Editora', () => {
    const objetoEditora = {
        nome: 'CDC',
        cidade: 'São Paulo',
        email: 'cdc@emails.com',
    };

    it('Deve instanciar um objeto Editora', () => {
        const editora = new Editora(objetoEditora);

        expect(editora).toEqual(expect.objectContaining(objetoEditora));
    });

    it.skip('Deve salvar a editora no banco de dados', () => {
        const editora = new Editora(objetoEditora);

        editora.salvar().then((resultado) => {
            expect(resultado.nome).toBe(objetoEditora.nome);
        });
    });

    it.skip('Deve salvar no banco de dados utilizando async/await', async () => {
        const editora = new Editora(objetoEditora);

        const resultado = await editora.salvar();

        const retornado = await Editora.pegarPeloId(resultado.id);

        expect(retornado).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoEditora,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            }),
        );
    });

    it('Deve fazer uma chamada simulada ao banco de dados', async () => {
        const editora = new Editora(objetoEditora);

        const mockSalvar = jest.fn().mockReturnValue({
            id: 999,
            ...objetoEditora,
            created_at: new Date(),
            updated_at: new Date(),
        });

        editora.salvar = mockSalvar;

        await editora.salvar();

        expect(mockSalvar).toHaveBeenCalled();
    });
});
