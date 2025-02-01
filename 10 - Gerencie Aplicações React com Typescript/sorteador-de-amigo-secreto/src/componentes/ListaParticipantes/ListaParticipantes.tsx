import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

const ListaParticipantes = () => {
    const participantes: string[] = useListaParticipantes();

    return (
        <ul>
            {participantes.map((participante, index) => (
                <li key={index}>{participante}</li>
            ))}
        </ul>
    )
}

export default ListaParticipantes;
