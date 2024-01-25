import styled from 'styled-components';
import IconButton from '../../IconButton';

const Figure = styled.figure`
  width: ${props => props.$expandida ? '90%' : '460px'};
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
      padding: 12px;
      h3 {
          font-family: 'GandhiSansBold';
      }
      h4 {
          flex-grow: 1;
      }
      h3, h4 {
          margin: 0;
          font-size: 16px;
      }
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = ({ photo, expanded = false }) => {
  return (
    <Figure $expandida={expanded} id={`photo-${photo.id}`}>
      <img src={photo.path} alt={photo.title} />
      <figcaption>
        <h3>{photo.title}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <IconButton>
            <img src="/icons/favorito.png" alt="Favorito" />
          </IconButton>
          {!expanded && <IconButton aria-hidden={expanded}>
            <img src="/icons/expandir.png" alt="Expandir" />
          </IconButton>}
        </Footer>
      </figcaption>
    </Figure>
  )
}

export default Image;
