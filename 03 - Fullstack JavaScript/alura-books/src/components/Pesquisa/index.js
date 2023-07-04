import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`
const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`
const Subtitulo = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`
const Resultado = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const LivroResultado = styled.div`
  display: flex;
  flex-direction: column;
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

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;

  }
`

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={event => {
          const textoDigitado = event.target.value
          const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      <Resultado>
        {
          livrosPesquisados.map(livro => (
            <LivroResultado>
              <p>{livro.nome}</p>
              <img src={livro.src} alt={livro.nome} />
            </LivroResultado>
          ))
        }
      </Resultado>

    </PesquisaContainer>
  )
}

export default Pesquisa;
