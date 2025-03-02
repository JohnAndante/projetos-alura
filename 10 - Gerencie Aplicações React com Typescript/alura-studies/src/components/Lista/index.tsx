import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface IListaProps {
    tarefas: ITarefa[];
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
};

function Lista({ tarefas, selecionaTarefa }: IListaProps) {

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={tarefa.id}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
