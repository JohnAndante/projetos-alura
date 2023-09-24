import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const [valor, setValor] = useState("");

  const aoDigitado = (evento) => {
    setValor(evento.target.value);
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
