import styled from "styled-components";
import Trending from "./Trending";
import Title from "../Title";
import Image from "./Image";
import Tags from "./Tags";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({ photos = [] }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map(photo =>
              <Image photo={photo} key={photo.id} />
            )}
          </ImagesContainer>
        </FluidSection>
        <Trending />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
