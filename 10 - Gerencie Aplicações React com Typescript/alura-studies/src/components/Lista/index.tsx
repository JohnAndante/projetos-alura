import style from './Lista.module.scss';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:30:00'
    },
    {
        tarefa: 'JavaScript',
        tempo: '01:15:00'
    }, {
        tarefa: 'HTML',
        tempo: '00:45:00'
    }, {
        tarefa: 'CSS',
        tempo: '00:45:00'
    }];

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} className={style.item}>
                        <h3>
                            {tarefa.tarefa}
                        </h3>
                        <span>
                            {tarefa.tempo}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
};

export default Lista;
