import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__spinner} />
      <p className={styles.loader__text}>Carregando...</p>
    </div>
  );
};

export default Loader;
