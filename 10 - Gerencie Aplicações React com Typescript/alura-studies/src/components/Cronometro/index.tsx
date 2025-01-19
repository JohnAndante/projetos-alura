import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import { tempoParaSegundos } from "../../common/utils/date";
import { useEffect, useState } from "react";

interface ICronometroProps {
    selecionado: ITarefa | undefined;
    finalizarTarefa: () => void;
}

function Cronometro({ selecionado, finalizarTarefa }: ICronometroProps) {
    const [tempo, setTempo] = useState<number>();
    const [counting, setCounting] = useState<boolean>(false);

    useEffect(() => {
        if (selecionado?.tempo) setTempo(tempoParaSegundos(selecionado.tempo));
    }, [selecionado]);

    const handleStart = () => {
        if (!tempo) return;
        setCounting(!counting);
    }

    useEffect(() => {
        if (!counting) return;

        setTimeout(() => {
            if (tempo && tempo > 0) {
                setTempo(tempo - 1);
            } else {
                setCounting(false);
                finalizarTarefa();
            }
        }, 1000);
    }, [counting, tempo, finalizarTarefa]);

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>

            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo} counting={counting} />
            </div>

            <Botao onClick={handleStart}>
                {counting ? 'Pausar' : 'Iniciar'}
            </Botao>

        </div>
    )
}

export default Cronometro;
