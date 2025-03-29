import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import Menu from './index';

describe('Teste do componente Menu', () => {
  test('Deve renderizar o menu', () => {
    render(<Menu />);
    const menu = screen.getByRole('navigation');
    expect(menu).toBeInTheDocument();
  });

  test('Deve renderizar os links do menu', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
  });

  test('Não deve renderizar o link para Extrato', () => {
    render(<Menu />);
    const linkExtrato = screen.queryByText('Extrato');
    expect(linkExtrato).not.toBeInTheDocument();
  });

  test('Deve renderizar uma lista de links com a classe link', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveClass('link');
    });
    expect(links).toMatchSnapshot();
  });
});
