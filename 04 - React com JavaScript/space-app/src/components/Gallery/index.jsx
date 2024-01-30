import styled from "styled-components";
import Trending from "./Trending";
import Title from "../Title";
import Image from "./Image";
import Tags from "./Tags";

const GalleryContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Gallery = ({ photos = [], setTag, onSelectedPhoto, onToggleFavourite }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map(photo =>
              <Image
                onZoomRequest={onSelectedPhoto}
                onToggleFavourite={onToggleFavourite}
                photo={photo}
                key={photo.id} />
            )}
          </ImagesContainer>
        </FluidSection>
        <Trending />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
