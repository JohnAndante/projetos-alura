import { screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Rodape from './Rodape';
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes';

jest.mock('../../state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn(),
    }
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao,
    };
});

jest.mock('../../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio,
    };
});


describe('Teste do componente Rodape, com participantes insuficientes', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Josberto', 'Jubileu']);
    })

    test('Com menos de 3 participantes, o botão de iniciar sorteio deve estar desabilitado', () => {

        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button');

        expect(botao).toBeDisabled();

    });

});

describe('Teste do componente Rodape, com participantes suficientes', () => {

    const participantesTeste = ['Jezebiel Ferreira', 'Josias o Cantor', 'Barnabé Vieira', 'Josberto', 'Jubileu'];

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantesTeste);
    })

    test('Com 3 ou mais participantes, o botão de iniciar sorteio deve estar habilitado', () => {

        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button');

        expect(botao).toBeEnabled();

    });

    test('Clicar no botão de iniciar sorteio deve navegar para a página de sorteio', () => {

        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button');

        botao.click();

        expect(mockNavegacao).toHaveBeenCalledTimes(1);

        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');

        expect(mockSorteio).toHaveBeenCalledTimes(1);

    });

});
