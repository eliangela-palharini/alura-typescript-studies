import React from 'react';
import Button from '../Button';
import style from './Formulario.module.scss';

const Form: React.FC = () => {
    return (
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>

                <input
                    id="tarefa"
                    name="tarefa"
                    placeholder="O que você quer estudar?"
                    required
                    type="text"
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>

                <input
                    id="tempo"
                    max="01:30:00"
                    min="00:00:00"
                    name="tempo"
                    step="1"
                    type="time"
                />
            </div>

            <Button>Adicionar</Button>
        </form>
    );
};

export default Form;
