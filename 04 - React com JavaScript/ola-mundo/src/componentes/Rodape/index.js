import styles from './Rodape.module.css';

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      Desenvolvido com 💙 por Alura © {new Date().getFullYear()}
    </footer>
  )
}

export default Rodape;
