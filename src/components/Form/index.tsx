import React, { useState } from 'react';
import ITarefa from '../../types/ITarefa';
import Button from '../Button';
import style from './Formulario.module.scss';

interface IProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

const Form: React.FC<IProps> = ({ setTarefas }) => {
    const [state, setState] = useState({
        tarefa: '',
        tempo: '00:00',
    });

    const handleSalvarTarefa = (evento: React.FormEvent) => {
        evento.preventDefault();
        setTarefas((tarefasAntigas) => [...tarefasAntigas, state]);
    };

    return (
        <form className={style.novaTarefa} onSubmit={handleSalvarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>

                <input
                    id="tarefa"
                    name="tarefa"
                    value={state.tarefa}
                    onChange={(e) => setState({ ...state, tarefa: e.target.value })}
                    placeholder="O que você quer estudar?"
                    required
                    type="text"
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>

                <input
                    id="tempo"
                    max="03:00:00"
                    min="00:00:00"
                    name="tempo"
                    value={state.tempo}
                    onChange={(e) => {
                        setState({ ...state, tempo: e.target.value });
                    }}
                    step="1"
                    type="time"
                />
            </div>

            <Button type="submit">Adicionar</Button>
        </form>
    );
};

export default Form;
