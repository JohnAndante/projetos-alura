import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteFavorito, getFavoritos } from "../services/favoritos";
import livroImg from "../images/livro.png";

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

const Titulo = styled.div`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding: 10px 0;
  font-weight: 600;
`;

const ResultadoFavoritos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LivroFavorito = styled.div`
  display: flex;
  flex-direction: "column";
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  margin: 0 auto;

  p {
    width: 220px;
    font-size: 18px;
    font-weight: 600;
  }

  img {
    width: 180px;
  }

  &: hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos();
    setFavoritos(favoritosDaApi);
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro de id:${id} deletado!`);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);
  return (
    <AppContainer>
      <Titulo>Seus Livros Favoritos</Titulo>
      <ResultadoFavoritos>
        {favoritos.map((favorito) => (
          <LivroFavorito onClick={() => deletarFavorito(favorito.id)}>
            <p>{favorito.nome}</p>
            <img src={livroImg} alt={favorito.nome} />
          </LivroFavorito>
        ))}
      </ResultadoFavoritos>
    </AppContainer>
  );
}

export default Favoritos;
