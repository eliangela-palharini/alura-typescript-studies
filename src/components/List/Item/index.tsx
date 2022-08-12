import React from 'react';
import ITarefa from '../../../types/ITarefa';
import style from '../Lista.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (task: ITarefa) => void;
}

const Item: React.FC<Props> = ({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa,
}) => {
    return (
        <li
            className={style.item}
            onClick={() =>
                selecionaTarefa({ id, tarefa, tempo, selecionado, completado })
            }
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
};

export default Item;
