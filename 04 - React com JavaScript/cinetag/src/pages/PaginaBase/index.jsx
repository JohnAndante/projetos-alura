import React from 'react';
import { Outlet } from 'react-router-dom';

import Cabecalho from '../../components/Cabecalho';
import Container from '../../components/Container';
import Rodape from '../../components/Rodape';
import FavoritosProvider from '../../contexts/Favoritos';

const PaginaBase = () => {

  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
