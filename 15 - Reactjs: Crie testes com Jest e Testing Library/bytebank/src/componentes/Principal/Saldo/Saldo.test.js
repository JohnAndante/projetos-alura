import { render, screen } from '@testing-library/react';
import { describe, test } from '@jest/globals';
import Saldo from '.';

describe('Testando o componente Saldo', () => {
  test('Deve renderizar o saldo como valor monetário', () => {
    render(<Saldo saldo={100} />);

    const saldoElement = screen.getByTestId('saldo');
    expect(saldoElement).toBeInTheDocument();
  });
});
