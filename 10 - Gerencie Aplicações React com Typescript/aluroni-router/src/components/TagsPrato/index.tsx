import classNames from 'classnames';
import { Prato as IPrato } from 'types/Prato';

import styles from './TagsPrato.module.scss';

export default function TagsPrato({
    category,
    size,
    serving,
    price,
}: IPrato) {
    return (
        <>
            <div className={styles.item__tags}>
                <div className={classNames({
                    [styles.item__tipo]: true,
                    [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
                })}>
                    {category.label}
                </div>

                <div className={styles.item__porcao}>{size}g</div>
                <div className={styles.item__qtdpessoas}>{serving} 2 pessoa{serving === 1 ? '' : 's'}</div>
                <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
            </div>
        </>
    );
}
