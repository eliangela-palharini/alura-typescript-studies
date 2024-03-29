import React from 'react';
import style from './Relogio.module.scss';

const Relogio: React.FC = () => {
    return (
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    );
};

export default Relogio;
