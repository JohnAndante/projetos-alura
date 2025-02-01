import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

describe('Testes do componente Formulario', () => {

    test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );

        // Encontrar no DOM o input
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");

        // Encontrar o botão
        const botao = screen.getByRole('button');

        // Garantir que o input esteja no documento
        expect(input).toBeInTheDocument();

        // Garantir que o botão esteja no documento
        expect(botao).toBeDisabled();
    });

    test('Adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );

        // Encontrar no DOM o input
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");

        // Encontrar o botão
        const botao = screen.getByRole('button');

        // Inserir um valor no input
        fireEvent.change(input, { target: { value: 'Jezebiel Ferreira' } });

        // Clicar no botão de submeter
        fireEvent.click(botao);

        // Garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus();

        // Garantir que o input não tenha um valor
        expect(input).toHaveValue('');
    })

    test('Nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );

        // Encontrar no DOM o input
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");

        // Encontrar o botão
        const botao = screen.getByRole('button');

        // Inserir um valor no input
        fireEvent.change(input, { target: { value: 'Jezebiel Ferreira' } });

        // Clicar no botão de submeter
        fireEvent.click(botao);

        // Inserir o mesmo valor no input
        fireEvent.change(input, { target: { value: 'Jezebiel Ferreira' } });

        // Clicar no botão de submeter
        fireEvent.click(botao);

        // Encontrar a mensagem de erro
        const mensagemDeErro = screen.getByRole('alert');

        // Garantir que a mensagem de erro esteja no documento
        expect(mensagemDeErro.textContent).toBe('Participante já adicionado. Nomes duplicados não são permitidos.');
    })

    test('A mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers();

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );

        // Encontrar no DOM o input
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");

        // Encontrar o botão
        const botao = screen.getByRole('button');

        // Inserir um valor no input
        fireEvent.change(input, { target: { value: 'Jezebiel Ferreira' } });

        // Clicar no botão de submeter
        fireEvent.click(botao);

        // Inserir o mesmo valor no input
        fireEvent.change(input, { target: { value: 'Jezebiel Ferreira' } });

        // Clicar no botão de submeter
        fireEvent.click(botao);

        // Encontrar a mensagem de erro
        let mensagemDeErro = screen.queryByRole('alert');

        // Garantir que a mensagem de erro esteja no documento
        expect(mensagemDeErro).toBeInTheDocument();

        act(() => {
            // Esperar tempo
            jest.runAllTimers();
        });

        // Tentar encontrar a mensagem de erro
        mensagemDeErro = screen.queryByRole('alert');

        // Garantir que a mensagem de erro não esteja no documento
        expect(mensagemDeErro).not.toBeInTheDocument();
    })

})
