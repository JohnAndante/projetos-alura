import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

import styles from './Sobre.module.scss';
import temaStyles from '../../styles/Tema.module.scss';

const imagens = [massa1, massa2];

export default function Sobre() {
    return (
        <section className={styles.sobre}>
            <h3 className={temaStyles.titulo}>Sobre</h3>

            <div className={styles.sobreNos}>
                <img src={casa} alt="Casa Aluroni" />
                <p className={styles.sobreNos__texto}>
                    Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                </p>
                <p className={styles.sobreNos__texto}>
                    Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                </p>
                <p className={styles.sobreNos__texto}>
                    Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
                </p>
            </div>

            <div className={styles.imagens}>
                {imagens.map((imagem, index) => (
                    <div key={index} className={styles.imagens__imagem}>
                        <img src={imagem} alt="Massa Italiana" />
                    </div>
                ))}
            </div>

        </section>
    );
}
