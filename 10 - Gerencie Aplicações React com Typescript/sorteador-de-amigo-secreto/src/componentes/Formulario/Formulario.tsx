import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";
import './styles.css';

const Formulario = () => {
    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        adicionarNaLista(nome);

        setNome('');
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={adicionarParticipante}>
            <div className="grupo-input-btn">
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>Adicionar</button>
            </div>
            {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
        </form>
    );
}

export default Formulario;
