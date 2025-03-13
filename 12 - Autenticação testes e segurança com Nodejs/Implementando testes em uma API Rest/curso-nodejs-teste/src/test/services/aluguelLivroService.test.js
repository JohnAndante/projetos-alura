import { describe, expect, it } from '@jest/globals';
import AluguelLivroService from '../../services/aluguelLivroService';

const aluguelLivroService = new AluguelLivroService();

/**
 * - Número de dias alugados tem que ser maior do que 0
 * - Data que o livro foi alugado não pode ser nula
 * - Retornar a data de devolução do livro validando a quantidade de dias alugados
 */

describe('Testando AluguelLivroService', () => {
    it('Deve retornar a data de devolução do livro', async () => {
        const dataAlugado = new Date('2025-12-01');
        const numeroDiasAlugados = 5;
        const dataDevolucaoMock = new Date('2025-12-06');

        const dataDevolucao = await aluguelLivroService.calcularDataDevolucao(dataAlugado, numeroDiasAlugados);

        expect(dataDevolucao).toStrictEqual(dataDevolucaoMock);
    });

    it('Deve retornar erro quando a data que o livro foi alugado for nula', async () => {
        const dataAlugado = null;
        const numeroDiasAlugados = 5;

        try {
            await aluguelLivroService.calcularDataDevolucao(dataAlugado, numeroDiasAlugados);
        } catch (err) {
            expect(err.message).toBe('Data que o livro foi alugado não pode ser nula');
        }
    });

    it('Deve retornar erro quando o número de dias alugados for menor ou igual a 0', async () => {
        const dataAlugado = new Date('2025-12-01');
        const numeroDiasAlugados = 0;

        try {
            await aluguelLivroService.calcularDataDevolucao(dataAlugado, numeroDiasAlugados);
        } catch (err) {
            expect(err.message).toBe('Número de dias alugados tem que ser maior do que 0');
        }
    });
});
