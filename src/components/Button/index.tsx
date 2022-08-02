import React from 'react';
import style from './Botao.module.scss';

interface IProps {
    children: string;
    onClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, onClick }) => {
    return (
        <button className={style.botao} onClick={onClick}>{children}</button>
    );
};

export default Button;
