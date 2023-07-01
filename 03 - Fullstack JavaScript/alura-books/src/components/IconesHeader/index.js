import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola]

const Icones = styled.ul`
  display: flex;
  align-items: center;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

function IconesHeader() {
  return(
    <Icones>
    {icones.map((icone) => (
      <Icone>
        <img src={icone} alt={icone}/>
      </Icone>
    ))}
  </Icones>

  )
}

export default IconesHeader
