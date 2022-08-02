import React from 'react';
import style from '../Lista.module.scss';

interface IProps {
    tarefa: string;
    tempo: string;
}

const Item: React.FC<IProps> = ({ tarefa, tempo }) => {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
};

export default Item;
