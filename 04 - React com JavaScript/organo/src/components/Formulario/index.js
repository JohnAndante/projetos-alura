import Botao from "../Botao";
import CampoTexto from "../CampoTexto/";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          required={true}
          label="Imagem"
          placeholder="Insira uma imagem"
        />
        <ListaSuspensa required={true} itens={times} label="Times" />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
