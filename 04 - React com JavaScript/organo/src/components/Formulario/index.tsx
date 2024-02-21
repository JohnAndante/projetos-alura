import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'

import './Formulario.css'

interface FormularioProps {
  aoCadastrar: (colaborador: any) => void;
  times: string[];
  cadastrarTime: (time: any) => void;
}

const Formulario = ({ aoCadastrar, times, cadastrarTime }: FormularioProps) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    console.log('form enviado', nome, cargo, imagem, time)
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="formulario-section">
      <form className="" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          required
          label='Nome'
          placeholder='Digite seu nome '
          valor={nome}
          aoAlterado={valor => setNome(valor)} />
        <Campo
          required
          label='Cargo'
          placeholder='Digite seu cargo '
          valor={cargo}
          aoAlterado={valor => setCargo(valor)} />
        <Campo
          label='Imagem'
          placeholder='Informe o endereço da imagem '
          valor={imagem}
          aoAlterado={valor => setImagem(valor)} />
        <ListaSuspensa
          required
          label='Times'
          items={times}
          valor={time}
          aoAlterado={valor => setTime(valor)} />
        <Botao>
          Criar Card
        </Botao>
      </form>
      <form className="" onSubmit={(e) => { e.preventDefault(); cadastrarTime({ nome: nomeTime, cor: corTime }) }}>
        <h2>Preencha os campos para criar um time.</h2>
        <Campo
          required
          label='Nome'
          placeholder='Digite o nome do time '
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)} />
        <Campo
          required
          label='Cor'
          type='color'
          placeholder='Digite a cor do time'
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)} />
        <Botao>
          Criar Time
        </Botao>
      </form>
    </section>
  )
}

export default Formulario
