import { useState } from "react";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import Card from "../../componentes/Card";
import './styles.css';

const Sorteio = () => {

    const participantes = useListaParticipantes();
    const [participanteSelecionado, setParticipanteSelecionado] = useState<string>('');
    const [amigoSecreto, setAmigoSecreto] = useState<string>('');
    const resultado = useResultadoSorteio();

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        const amigoSecretoSorteado = resultado.get(participanteSelecionado);
        if (amigoSecretoSorteado) setAmigoSecreto(amigoSecretoSorteado);

        setTimeout(() => {
            setAmigoSecreto('');
        }, 5000);
    };

    return (
        <Card>
            <section className="sorteio">
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear}>
                    <select
                        name="participante-da-vez"
                        id="participante-da-vez"
                        placeholder="Selecione o participante"
                        value={participanteSelecionado}
                        onChange={(evento) => setParticipanteSelecionado(evento.target.value)}
                        required
                    >
                        <option value="">Selecione o seu nome</option>
                        {participantes.map((participante, index) => (
                            <option key={index} value={participante}>{participante}</option>
                        ))}
                    </select>
                    <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                    <button
                        className="botao-sortear"
                        type="submit"
                    >
                        Sortear
                    </button>
                </form>
                {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}
                <footer className="sorteio">
                    <img src="/imagens/aviao.png" className="aviao" alt="Avião de papel" />
                </footer>
            </section>
        </Card>
    );
}

export default Sorteio;
