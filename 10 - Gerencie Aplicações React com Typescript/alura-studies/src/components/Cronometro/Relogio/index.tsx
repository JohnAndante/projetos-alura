import { segundosParaCronometro } from "../../../common/utils/date";
import styles from "./Relogio.module.scss"

interface IRelogioProps {
    tempo: number | undefined;
    counting: boolean;
};

function Relogio({ tempo = 0, counting }: IRelogioProps) {

    const { minutos, segundos } = segundosParaCronometro(tempo, 'mm:ss');

    return (
        <>
            <span className={styles.relogioNumero}>{minutos?.dezena}</span>
            <span className={styles.relogioNumero}>{minutos?.unidade}</span>
            <span className={counting ? styles.relogioDivisaoPiscando : styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>{segundos?.dezena}</span>
            <span className={styles.relogioNumero}>{segundos?.unidade}</span>
        </>
    )
}

export default Relogio;
