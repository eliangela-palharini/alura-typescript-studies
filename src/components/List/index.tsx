import React from 'react';
import Item from './Item';
import style from './Lista.module.scss';

const List: React.FC = () => {
    const tasks = [
        {
            tarefa: 'React',
            tempo: '02:00:00',
        },
        {
            tarefa: 'TypeScript',
            tempo: '01:30:00',
        },
        {
            tarefa: 'Javascript',
            tempo: '03:30:00',
        },
    ];

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item {...task} key={index}></Item>
                ))}
            </ul>
        </aside>
    );
};

export default List;
