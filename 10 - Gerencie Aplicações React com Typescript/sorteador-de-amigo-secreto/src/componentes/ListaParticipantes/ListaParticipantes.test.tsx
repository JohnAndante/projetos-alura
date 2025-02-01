import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

jest.mock('../../state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn(),
    }
});

describe('Testes do componente ListaParticipantes em estado vazio', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([]);
    })

    test('Deve ser uma lista vazia quando não há participantes', () => {

        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )

        // Encontrar no DOM a lista
        const lista = screen.queryAllByRole('listitem');

        // Garantir que a lista esteja vazia
        expect(lista).toHaveLength(0);
    });

});

describe('Testes do componente ListaParticipantes em estado preenchido', () => {

    const participantesTeste = ['Jezebiel Ferreira', 'Josias o Cantor', 'Barnabé Vieira'];

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantesTeste);
    })

    test('Deve ser uma lista preenchida de participantes', () => {


        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )

        // Encontrar no DOM a lista
        const lista = screen.queryAllByRole('listitem');

        // Verificar quantidade de participantes na lista
        expect(lista).toHaveLength(participantesTeste.length);

        // Verificar se os participantes estão na lista
        lista.forEach((element, index) => {
            expect(element).toHaveTextContent(participantesTeste[index]);
        });
    })
});
