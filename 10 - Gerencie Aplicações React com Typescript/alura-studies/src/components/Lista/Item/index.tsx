import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

interface ItemProps extends ITarefa {

}

function Item({
    id,
    tarefa,
    tempo,
    seleionado,
    completado,
}: ItemProps) {

    return (
        <li className={style.item}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}

export default Item;
