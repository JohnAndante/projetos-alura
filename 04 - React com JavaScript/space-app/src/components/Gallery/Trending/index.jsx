import styled from "styled-components";
import Title from "../../Title";
import photos from '../../../fotos.json';

const PhotosColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #C98CF1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Trending = () => {
  return (
    <section>
      <Title $alinhamento={'center'}>Populares</Title>
      <PhotosColumn>
        {photos.map(photo => <Image key={photo.id} src={photo.path} alt={photo.titulo} />)}
      </PhotosColumn>
      <Button>Ver mais</Button>
    </section>
  )
}

export default Trending;
