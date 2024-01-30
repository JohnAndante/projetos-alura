import styled from 'styled-components';
import IconButton from '../../IconButton';

const Figure = styled.figure`
  width: ${props => props.$expandida ? '90%' : '360px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
      max-width: 100%;
      border-radius: 20px 20px 0 0;
  }
  figcaption {
      background-color: #001634;
      border-radius: 0px 0px 20px 20px;
      color: white;
      box-sizing: border-box;
      padding: 16px;
      h3 {
          font-weight: bold;
          font-size: 18px;
      }
      h4 {
          flex-grow: 1;
          font-size: 14px;
      }
      h3, h4 {
          margin: 0;
      }
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = ({ photo, expanded = false, onZoomRequest, onToggleFavourite }) => {

  const favouriteIcon = photo.favorito ? "/icons/favorito-ativo.png" : "/icons/favorito.png";
  return (
    <Figure $expandida={expanded} id={`photo-${photo.id}`}>
      <img src={photo.path} alt={photo.titulo} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <IconButton onClick={() => onToggleFavourite(photo)}>
            <img src={favouriteIcon} alt="Favoritar" />
          </IconButton>
          {!expanded && <IconButton aria-hidden={expanded} onClick={() => onZoomRequest(photo)}>
            <img src="/icons/expandir.png" alt="Expandir" />
          </IconButton>}
        </Footer>
      </figcaption>
    </Figure>
  )
}

export default Image;
