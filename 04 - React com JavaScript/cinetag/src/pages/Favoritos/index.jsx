import React from 'react';

import Titulo from '../../components/Titulo';
import Banner from '../../components/Banner';
import Card from "../../components/Card";
import { useFavoritoContext } from '../../contexts/Favoritos';

import styles from './Favoritos.module.css';

const Favoritos = () => {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagem={"favoritos"} />

      <Titulo>
        <h1>Seus vídeos favoritos estão aqui!</h1>
      </Titulo>

      <section className={styles.container}>
        {favorito.length === 0 && <p>Você ainda não tem favoritos.</p>}
        {favorito.length > 0 && favorito.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  );
}

export default Favoritos;
