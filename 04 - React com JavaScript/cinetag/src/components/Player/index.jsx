import React, { useEffect, useState } from 'react';
import Banner from '../Banner';
import Titulo from '../Titulo';
import { useParams } from 'react-router-dom';

import styles from './Player.module.css';
import NaoEncontrado from '../../pages/NaoEncontrado';

const Player = () => {
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:8080/videos?id=' + id)
      .then(resposta => resposta.json())
      .then(dados => setVideo(dados[0]))
  }, [id]);

  if (!video) {
    return <NaoEncontrado />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>

      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen />
      </section >
    </>
  )
}

export default Player;
