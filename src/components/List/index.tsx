import React from 'react';
import ITarefa from '../../types/ITarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface IProps {
    tarefas: ITarefa[];
}

const List: React.FC<IProps> = ({ tarefas }) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((task, index) => (
                    <Item {...task} key={index}></Item>
                ))}
            </ul>
        </aside>
    );
};

export default List;
