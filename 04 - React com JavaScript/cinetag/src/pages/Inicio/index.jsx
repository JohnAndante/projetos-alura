import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import Banner from '../../components/Banner';

import styles from './Inicio.module.css';

const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/videos')
      .then(resposta => resposta.json())
      .then(dados => setVideos(dados))
  }, [])

  return (
    <>
      <Banner imagem={"home"} />

      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  );
}

export default Inicio;
