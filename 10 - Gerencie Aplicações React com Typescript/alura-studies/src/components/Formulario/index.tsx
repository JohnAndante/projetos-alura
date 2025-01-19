import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: FormularioProps) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00:00");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "tarefa") setTarefa(e.target.value);
        if (e.target.name === "tempo") setTempo(e.target.value);
    };

    const resetState = () => {
        setTarefa("");
        setTempo("00:00:00");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTarefas((prevState: ITarefa[]) =>
            [
                ...prevState,
                {
                    id: uuidv4(),
                    selecionado: false,
                    completado: false,
                    tarefa,
                    tempo,
                }
            ]);
        resetState();
    };

    return (
        <form className={style.novaTarefa} onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Tarefa
                </label>
                <input
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    onChange={handleChange}
                    id="tarefa"
                    placeholder="Qual será sua próxima tarefa?"
                    autoComplete='off'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={handleChange}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                />
            </div>

            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario;
