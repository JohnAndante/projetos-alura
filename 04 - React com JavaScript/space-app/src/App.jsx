import { useEffect, useState } from "react"
import styled from "styled-components"

import GlobalStyles from "./components/GlobalStyles"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import ZoomModal from "./components/ZoomModal"
import Footer from './components/Footer';

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
  gap: 16px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;


const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [tag, setTag] = useState(0);
  const [filter, setFilter] = useState('');

  const onToggleFavourite = (favoritePhoto) => {
    favoritePhoto.id === selectedPhoto?.id && setSelectedPhoto({
      ...selectedPhoto,
      favorito: !selectedPhoto.favorito
    })
    setGalleryPhotos(galleryPhotos.map(photo => {
      return {
        ...photo,
        favorito: photo.id === favoritePhoto.id ? !favoritePhoto.favorito : photo.favorito
      }
    }))
  }

  useEffect(() => {
    const filteredPhotos = photos.filter(photo => {
      const filterByTag = !tag || photo.tags.includes(tag);
      const filterByTitle = !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    })
    setGalleryPhotos(filteredPhotos);
  }, [tag, filter]);

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header
          filter={filter}
          setFilter={setFilter} />
        <MainContainer>
          <Sidebar />
          <GalleryContent>
            <Banner
              backgroundImage={'/src/assets/banner.png'}
              texto={'A galeria mais completa de fotos do espaço!'}
            />
            <Gallery
              onSelectedPhoto={photo => setSelectedPhoto(photo)}
              onToggleFavourite={onToggleFavourite}
              photos={galleryPhotos} />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ZoomModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onToggleFavourite={onToggleFavourite} />
      <Footer />
    </FundoGradiente>
  )
}

export default App
