import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import { ITarefa } from '../types/tarefa';

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
    const [selecionado, setSelecionado] = useState<ITarefa | undefined>(undefined);

    function handleSelecionaTarefa(tarefaSelecionada: ITarefa) {
        if (tarefaSelecionada.completado) return;
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>
            tarefa.id === tarefaSelecionada.id ? { ...tarefa, selecionado: true } : { ...tarefa, selecionado: false }
        ));
    }

    function finalizarTarefa() {
        if (selecionado) {
            setSelecionado(undefined);
            setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
                if (tarefa.id === selecionado.id) {
                    return {
                        ...tarefa,
                        completado: true,
                        selecionado: false
                    }
                }
                return tarefa;
            }));
        }
    }

    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Lista
                tarefas={tarefas}
                selecionaTarefa={handleSelecionaTarefa}
            />
            <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
        </div>
    );
}

export default App;
