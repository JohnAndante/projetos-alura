import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import './styles.css';
import { useSorteador } from "../../state/hooks/useSorteador";

const Rodape = () => {

    const participantes = useListaParticipantes() as string[];

    const navigate = useNavigate();

    const sortear = useSorteador();

    const iniciar = () => {
        sortear();
        navigate('/sorteio');
    }

    return (
        <footer className="rodape-configuracoes">
            <button
                className="botao"
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                Iniciar brincadeira
            </button>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}

export default Rodape;
