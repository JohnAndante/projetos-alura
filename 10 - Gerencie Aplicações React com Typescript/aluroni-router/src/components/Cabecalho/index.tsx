import styles from './Cabecalho.module.scss';

export default function Cabecalho() {
    return (
        <header className={styles.header}>
            <div className={styles.header__text}>
                A casa do código e da massa
            </div>
        </header>
    );
}
