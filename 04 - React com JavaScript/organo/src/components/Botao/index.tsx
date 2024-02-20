import React, { ReactElement } from 'react';
import './Botao.css';

interface BotaoProps {
  children: ReactElement;
}

const Botao = ({ children }: BotaoProps) => {
  return (
    <button className='botao'>
      {children}
    </button>
  )
};

export default Botao;
