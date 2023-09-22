import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {};

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
