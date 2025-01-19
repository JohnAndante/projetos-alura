import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

class Formulario extends React.Component<FormularioProps> {
    state = {
        tarefa: "",
        tempo: "00:00:00",
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    resetState = () => {
        this.setState({
            tarefa: "",
            tempo: "00:00:00",
        });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.setTarefas((prevState: ITarefa[]) =>
            [
                ...prevState,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4(),
                }
            ]);
        this.resetState();
    };

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.handleSubmit}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Tarefa
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={this.handleChange}
                        id="tarefa"
                        placeholder="O quê você quer estudar?"
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
                        value={this.state.tempo}
                        onChange={this.handleChange}
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
}

export default Formulario;
