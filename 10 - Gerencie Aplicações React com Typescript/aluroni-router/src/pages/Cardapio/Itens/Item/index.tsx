import { Prato as IPrato } from 'types/Prato';

import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';

export default function Item(props: IPrato) {
    const navigate = useNavigate();
    const { title, description, photo } = props;

    return (
        <div className={styles.item} onClick={() => navigate(`/prato/${props.id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <TagsPrato {...props} />
        </div>
    );
}
