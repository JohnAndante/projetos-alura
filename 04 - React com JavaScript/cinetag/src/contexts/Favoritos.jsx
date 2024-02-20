/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export const FavoritosProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export const useFavoritoContext = () => {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  const adicionarFavorito = (novoFavorito) => {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }

  return { favorito, adicionarFavorito };
}

export default FavoritosProvider;
