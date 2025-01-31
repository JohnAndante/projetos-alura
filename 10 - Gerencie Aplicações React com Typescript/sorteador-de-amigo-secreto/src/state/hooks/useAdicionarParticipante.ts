import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaParticipantesState } from "../atom";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState);
    const lista = useRecoilValue(listaParticipantesState);
    const setErro = useSetRecoilState(erroState);

    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro('Participante já adicionado. Nomes duplicados não são permitidos.');
            setTimeout(() => {
                setErro('');
            }, 3000);
            return;
        }
        setLista((lista) => [...lista, nomeDoParticipante]);
    }
}
