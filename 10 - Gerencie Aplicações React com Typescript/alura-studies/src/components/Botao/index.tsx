import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

function Botao({ children, ...props }: BotaoProps) {

    return (
        <button
            className={style.botao}
            {...props}
        >
            {children}
        </button>
    );
}

export default Botao;
