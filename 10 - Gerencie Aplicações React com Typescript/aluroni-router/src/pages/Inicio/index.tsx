import { useNavigate } from 'react-router-dom';
import { Prato as IPrato } from 'types/Prato';

import cardapio from 'data/cardapio.json';

import nossaCasa from 'assets/nossa_casa.png';
import temaStyles from '../../styles/Tema.module.scss';
import styles from './Inicio.module.scss';

export default function Inicio() {

    const navigate = useNavigate();

    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados
        .sort(() => 0.5 - Math.random())
        .splice(0, 3);

    function redirecionarParaDetalhes(prato: IPrato) {
        navigate(`/prato/${prato.id}`, { state: prato });
    }

    return (
        <section>
            <h3 className={temaStyles.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(prato => (
                    <div key={prato.id} className={styles.recomendado}>

                        <div className={styles.recomendado__imagem}>
                            <img src={prato.photo} alt={prato.title} />
                        </div>

                        <button
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarParaDetalhes(prato)}
                        >
                            Ver Mais
                        </button>
                    </div>
                ))}
            </div>

            <h3 className={temaStyles.titulo}>Nossa casa</h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt="Casa do aluroni" />
                <div className={styles.nossaCasa__endereco}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}
