import { useParams, useNavigate } from 'react-router-dom';

import cardapio from 'data/cardapio.json';
import NaoEncontrado from 'components/NaoEncontrado';
import styles from './Prato.module.scss';
import TagsPrato from 'components/TagsPrato';

export default function Prato() {
    const { prato_id: pratoId } = useParams<{ prato_id: string }>();
    const navigate = useNavigate();

    const prato = cardapio.find(p => p.id === Number(pratoId));

    if (!prato) return <NaoEncontrado />;

    return (
        <>
            <button
                className={styles.voltar}
                onClick={() => navigate(-1)}
            >
                {'< '}
                Voltar
            </button>

            <section className={styles.container}>

                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>

                <div>
                    <img src={prato.photo} alt={prato.title} />
                </div>

                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {prato.description}
                    </p>

                    <TagsPrato {...prato} />
                </div>
            </section>
        </>
    );
}
