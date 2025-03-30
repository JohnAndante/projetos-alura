import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import Cabecalho from './index';

describe('Teste do componente Cabecalho', () => {
  test('Deve renderizar o cabeçalho', () => {
    render(<Cabecalho />);
    const cabecalho = screen.getByRole('banner');
    expect(cabecalho).toBeInTheDocument();
  });

  test('Deve renderizar o nome do usuário', () => {
    render(<Cabecalho />);
    const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
    expect(nomeUsuario).toBeInTheDocument();
  });
});
