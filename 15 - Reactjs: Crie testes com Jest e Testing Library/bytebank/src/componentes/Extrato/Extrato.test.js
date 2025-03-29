import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import Extrato from './';

describe('Teste do componente Extrato', () => {
  test('Deve renderizar uma lista de transações', () => {
    const transacoes = [
      { transacao: 'Depósito', valor: 100 },
      { transacao: 'Saque', valor: -50 },
    ];
    render(<Extrato transacoes={transacoes} />);
    const lista = screen.getAllByRole('listitem');
    expect(lista).toHaveLength(2);
    expect(lista[0]).toHaveTextContent('Depósito');
    expect(lista[1]).toHaveTextContent('Saque');
  });
});
