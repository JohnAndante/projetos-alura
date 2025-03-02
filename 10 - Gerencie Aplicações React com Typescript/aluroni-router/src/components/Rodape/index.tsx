import { ReactComponent as Logo } from 'assets/logo.svg';

import styles from './Rodape.module.scss';

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <Logo />
        </footer>
    );
}
