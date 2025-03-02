import { useParams, useNavigate, Navigate } from 'react-router-dom';

import cardapio from 'data/cardapio.json';
import styles from './Prato.module.scss';
import TagsPrato from 'components/TagsPrato';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {
    const navigate = useNavigate();
    const { prato_id: pratoId } = useParams<{ prato_id: string }>();

    const prato = cardapio.find(p => p.id === Number(pratoId));

    if (!prato) {
        return <Navigate to="/nao-encontrado" replace />;
    }

    return (
        <PaginaPadrao>
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

        </PaginaPadrao>
    );
}
