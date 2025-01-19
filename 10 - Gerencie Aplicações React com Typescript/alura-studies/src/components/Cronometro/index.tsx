import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import { tempoParaSegundos } from "../../common/utils/date";
import { useState } from "react";

interface ICronometroProps {
    selecionado: ITarefa | undefined;
}

function Cronometro({ selecionado }: ICronometroProps) {
    const [tempo, setTempo] = useState<number>();

    if (selecionado && selecionado.tempo) {
        const segundos = tempoParaSegundos(selecionado.tempo);
        setTempo(segundos);
    }


    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>

            <div className={styles.relogioWrapper}>
                <Relogio />
            </div>

            <Botao>Começar</Botao>
        </div>
    )
}

export default Cronometro;
