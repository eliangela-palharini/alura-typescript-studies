import React from 'react';
import ITarefa from '../../types/ITarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[];
    selecionaTarefa: (task: ITarefa) => void;
}

const List: React.FC<Props> = ({ tarefas, selecionaTarefa }) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        {...tarefa}
                        key={tarefa.id}
                        selecionaTarefa={selecionaTarefa}
                    ></Item>
                ))}
            </ul>
        </aside>
    );
};

export default List;
