import React from 'react';
import './ListaSuspensa.css';

interface ListaSuspensaProps {
  label: string;
  items: string[];
  valor: string;
  aoAlterado: (valor: string) => void;
  required?: boolean;
}

const ListaSuspensa = ({ label, items, valor, aoAlterado, required = false }: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={required}
        value={valor}
        onChange={evento => aoAlterado(evento.target.value)}
      >
        <option />
        {items.map(item =>
          <option key={item}>
            {item}
          </option>
        )}
      </select>
    </div>
  )
}

export default ListaSuspensa
