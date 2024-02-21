import './Campo.css';

interface CampoProps {
  label: string;
  aoAlterado: (valor: string) => void;
  valor: string;
  required?: boolean;
  placeholder?: string;
  type?: 'text' | 'date' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'time' | 'color' | 'file' | 'datetime-local' | 'month' | 'week' | 'range' | 'hidden' | 'image' | 'reset' | 'submit' | 'button' | 'checkbox' | 'radio' | 'file' | 'image' | 'reset' | 'submit' | 'button';
}

const Campo = ({ label, aoAlterado, valor, placeholder, type, required = false }: CampoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className='campo-texto'>
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={required}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Campo;
