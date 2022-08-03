import React from 'react';
import style from './Botao.module.scss';

interface IProps {
    children: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<IProps> = ({ children, onClick, type = 'button' }) => {
    return (
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
