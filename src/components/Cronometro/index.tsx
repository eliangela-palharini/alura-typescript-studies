import React from 'react';
import Button from '../Button';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';

const Cronometro: React.FC = () => {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>

            <Button>Começar!</Button>
        </div>
    );
};

export default Cronometro;
