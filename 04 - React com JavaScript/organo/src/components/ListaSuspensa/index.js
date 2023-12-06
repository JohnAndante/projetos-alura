import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select
        required={props.required}
        value={props.valor}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
      >
        <option value="0" key='0' disabled defaultValue>Selecione um time</option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
