import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../atom';
import { IEvento } from './../../interfaces/IEvento';
import { obterId } from '../../util';


const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        const hoje = new Date();

        if (evento.inicio < hoje) {
            throw new Error('A data de início do evento não pode ser anterior à data atual.');
        }

        if (evento.fim < evento.inicio) {
            throw new Error('A data de fim do evento não pode ser anterior à data de início.');
        }

        evento.id = obterId();

        setListaDeEventos(eventos => [...eventos, evento]);
    };
}

export default useAdicionarEvento;
