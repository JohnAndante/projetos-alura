import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

function Lista({ tarefas }: { tarefas: ITarefa[] }) {

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item key={index} {...tarefa} />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
