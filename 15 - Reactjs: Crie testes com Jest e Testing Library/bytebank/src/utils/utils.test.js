import { describe, test, expect } from '@jest/globals';
import { calculaNovoSaldo } from '.';

describe('Testando funções utilitárias', () => {
  test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

    const saldo = 100;

    const novoSaldo = calculaRendimento(saldo);

    expect(novoSaldo).toBe(100.5);
    expect(calculaRendimento).toHaveBeenCalled();
    expect(calculaRendimento).toHaveBeenCalledWith(saldo);
  });
});

describe('Testando uma transação', () => {
  test('Deve aumentar o saldo quando a transação for um depósito', () => {
    const transacao = {
      valor: 50,
      transacao: 'Depósito',
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(150);
  });

  test('Deve diminuir o saldo quando a transação for um saque', () => {
    const transacao = {
      valor: 50,
      transacao: 'Saque',
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(50);
  });
});
