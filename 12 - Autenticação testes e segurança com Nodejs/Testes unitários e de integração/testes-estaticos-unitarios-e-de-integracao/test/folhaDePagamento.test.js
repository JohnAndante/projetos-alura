import { somaHorasExtras, calculaDescontos } from "../index.js";
import { describe, expect, it } from "@jest/globals";

describe('Testes da folha de pagamento', () => {

    it('Deve retornar a soma das horas extras', () => {
        const esperado = 2500;
        const retornado = somaHorasExtras(2000, 500);

        expect(retornado).toBe(esperado);
    });

    it('Deve retornar o valor do salário com descontos', () => {
        const esperado = 1500;
        const retornado = calculaDescontos(2000, 500);

        expect(retornado).toBe(esperado);
    });

});
