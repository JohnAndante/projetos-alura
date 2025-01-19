import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{ children: React.ReactNode, type?: "submit" | "reset" | "button" | undefined }> {

    render() {
        const { children, type = "button" } = this.props;
        return (
            <button className={style.botao} type={type}>
                {children}
            </button>
        )
    }
}

export default Botao;
