import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>

        <p className={styles.descricao}>
          Boas vindas ao meu espaço pessoal! Meu nome é <strong>Cleiton Rasta</strong>, sou
          instrutor da Alura e aqui você encontrará um pouco sobre mim e sobre o que eu gosto de fazer.
          <br />Fique à vontade para explorar o site e conhecer mais sobre mim.
        </p>
      </div>

      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt='Círculo colorido' aria-hidden={true} />
        <img className={styles.minhaFoto} src={minhaFoto} alt='Foto de Lucas' />
      </div>
    </div>
  )
}

export default Banner;
