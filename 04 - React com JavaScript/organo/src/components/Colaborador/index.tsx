import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart, } from 'react-icons/ai';
import { IColaborador } from '../shared/interfaces/IColaborador';
import './Colaborador.css'

interface ColaboradorProps {
  colaborador: IColaborador;
  corDeFundo: string;
  aoDeletar: (id: number) => void;
  aoFavoritar: (id: number) => void;
}

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }: ColaboradorProps) => {

  const favoritar = () => {
    aoFavoritar(colaborador.id)
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }

  return (<div className="colaborador">
    <AiFillCloseCircle
      className='deletar'
      size={25}
      onClick={() => aoDeletar(colaborador.id)}
    />

    <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
      <img src={colaborador.imagem} alt={colaborador.nome} />
    </div>

    <div className="rodape">
      <h4>{colaborador.nome}</h4>
      <h5>{colaborador.cargo}</h5>
      <h5>{new Date(colaborador.data).toLocaleDateString()}</h5>

      <div className='favoritar'>
        {colaborador.favorito
          ? <AiFillHeart {...propsFavorito} color='#ff0000' />
          : <AiOutlineHeart {...propsFavorito} />}
      </div>
    </div>
  </div>)
}

export default Colaborador
