import styles from "./Banner.module.css";

const Banner = ({ imagem }) => {

  const url = `/images/banner-${imagem}.png`;
  return (
    <div className={styles.capa}>
      <img src={url} alt="Banner" />
    </div>
  );
};

export default Banner;
