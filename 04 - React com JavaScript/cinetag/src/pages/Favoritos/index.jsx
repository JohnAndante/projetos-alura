import Titulo from '../../components/Titulo';
import Banner from '../../components/Banner';
import Card from "../../components/Card";

import videos from '../../json/db.json';
import styles from './Favoritos.module.css';

const Favoritos = () => {
  return (
    <>
      <Banner imagem={"favoritos"} />

      <Titulo>
        <h1>Seus vídeos favoritos estão aqui!</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  );
}

export default Favoritos;
