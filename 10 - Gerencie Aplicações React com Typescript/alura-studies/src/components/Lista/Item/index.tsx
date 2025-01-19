import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface IItemProps extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Item({
    id,
    tarefa,
    tempo,
    selecionado,
    completado,
    selecionaTarefa,
}: IItemProps) {

    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => selecionaTarefa({ id, tarefa, tempo, selecionado, completado })}
        >
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
