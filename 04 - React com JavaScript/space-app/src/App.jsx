import { useState } from "react"
import styled from "styled-components"

import GlobalStyles from "./components/GlobalStyles"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"

import photos from './fotos.json';

const FundoGradiente = styled.div`
    background: linear-gradient(
      174.61deg,
      #041833 4.16%,
      #04244F 48%,
      #154580 96.76%
      );
    width: 100%;
    min-height: 100vh;
  `;

const AppContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;

`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;


const App = () => {
  const [galleryPhotos, setGallerPhotos] = useState(photos);

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Sidebar />
          <GalleryContent>
            <Banner
              backgroundImage={'/src/assets/banner.png'}
              texto={'A galeria mais completa de fotos do espaço!'}

            />
            <Gallery photos={galleryPhotos} />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
