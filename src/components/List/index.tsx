import React from 'react';
import './style.scss';

export const List = () => {
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
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li className="item" key={index}>
                        <h3>{task.tarefa}</h3>
                        <span>{task.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default List;
