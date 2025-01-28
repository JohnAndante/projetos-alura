import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useAtualizarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        setListaDeEventos(eventos => {
            const index = eventos.findIndex(e => e.id === evento.id);
            return [
                ...eventos.slice(0, index),
                evento,
                ...eventos.slice(index + 1),
            ];
        });
    };
}

export default useAtualizarEvento;
