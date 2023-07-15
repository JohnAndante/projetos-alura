import { livros } from "./dadosUltimosLancamentos.js";
import { Titulo } from "../Titulo/index.js";
import CardRecomenda from "../CardRecomenda/index.js";
import imgLivro from "../../images/livro2.png";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const LivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" tamanhofonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <LivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt={livro.nome} />
        ))}
      </LivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imgLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
