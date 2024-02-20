import React from 'react';
import styles from './NaoEncontrado.module.css';

export const NaoEncontrado = () => {
  return (
    <section className={styles.container}>
      <h2>404</h2>
      <p>Página não encontrada</p>
    </section>
  );
}

export default NaoEncontrado;
