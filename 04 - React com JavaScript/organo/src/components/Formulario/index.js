import { useState, useRef } from 'react';

import Botao from '../Botao';
import CampoTexto from '../CampoTexto/';
import ListaSuspensa from '../ListaSuspensa';

import './Formulario.css';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const formRef = useRef(null);
  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    formRef.current.reset();
    setTime('0');
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar} ref={formRef}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          required={true}
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          required={true}
          label='Imagem'
          placeholder='Insira uma imagem'
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          required={true}
          itens={props.times}
          label='Times'
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto='Criar Card' />
      </form>
    </section>
  );
};

export default Formulario;