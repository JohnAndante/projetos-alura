/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Cards.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';

import { useFavoritoContext } from '../../contexts/Favoritos';

const Card = ({ id, titulo, capa, }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((item) => item.id === id);
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />

      <h2>{titulo}</h2>

      <img src={icone}
        alt="Favoritar"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }} />
    </div>
  );
}

export default Card;
