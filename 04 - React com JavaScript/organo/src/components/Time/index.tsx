import Colaborador from '../Colaborador';
import { IColaborador } from '../shared/interfaces/IColaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

interface TimeProps {
  time: {
    id: number;
    nome: string;
    cor: string;
  };
  colaboradores: IColaborador[];
  aoDeletar: (id: number) => void;
  mudarCor: (cor: string, id: number) => void;
  aoFavoritar: (id: number) => void;

}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {
  return (
    colaboradores.length > 0
    && <section
      className='time'
      style={{
        backgroundImage: 'url(/imagens/fundo.png)',
        backgroundColor:
          hexToRgba(time.cor, 0.3)
      }}>

      <input
        type='color'
        value={time.cor}
        onChange={(e) => mudarCor(e.target.value, time.id)}
        className='input-cor' />

      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

      <div className='colaboradores'>
        {colaboradores.map((colaborador, indice) => {
          return (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          )
        })}
      </div>

    </section>

  )
}

export default Time;
