import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import Formulario from './';

describe('Teste do componente Formulario', () => {
  test('Deve renderizar um campo de input', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test('Deve renderizar um campo de input com o type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('Deve renderizar um campo de input que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '100');
    expect(campoTexto).toHaveValue(100);
  });

  test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);
    const botao = screen.getByRole('button');
    userEvent.click(botao);
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});
