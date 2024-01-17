import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [racas, setRacas] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    if (busca && busca.length > 3) {
      fetch(`http://localhost:8080/doguinhos?nome=${busca}`)
        .then(response => response.json())
        .then(data => setRacas(data))
    } else {
      fetch('http://localhost:8080/doguinhos')
        .then(response => response.json())
        .then(data => setRacas(data))
    }
  }, [busca])

  return (
    <div className="App">
      <h1>Bem vindo aos Doguinhos! 🐶</h1>
      <h4>Confira abaixo uma lista de raças dos doguinhos!</h4>

      <input placeholder='Buscar por raça' onChange={e => setBusca(e.target.value)} />
      <ul>
        {racas.map(raca => (
          <li key={raca.nome}>{raca.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
