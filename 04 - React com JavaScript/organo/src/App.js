import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";


function App() {

  const [times, setTimes] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);

  /* // ? Exemplo de como os dados de times estavam sendo passados antes da API
   * const [times, setTimes] = useState([
   *   {
   *     id: uuid(),
   *     nome: 'Programação',
   *     cor: '#57C278'
   *   },
   *   {
   *     id: uuid(),
   *     nome: 'Front-End',
   *     cor: '#82CFFA'
   *   },
   *   {
   *     id: uuid(),
   *     nome: 'Data Science',
   *     cor: '#A6D157'
   *   },
   *   {
   *     id: uuid(),
   *     nome: 'Devops',
   *     cor: '#E06B69'
   *   },
   *   {
   *     id: uuid(),
   *     nome: 'UX e Design',
   *     cor: '#DB6EBF'
   *   },
   *   {
   *     id: uuid(),
   *     nome: 'Mobile',
   *     cor: '#FFBA05'
   *   },
   *   {
   *     id: uuid(),
   *     nome: 'Inovação e Gestão',
   *     cor: '#FF8A29'
   *   },
   * ])
   */

  /* // ? Exemplo de como os dados de colaboradores estavam sendo passados antes da API
  * const colaboradores = [
  *   {
  *     id: uuid(),
  *     nome: 'JULIANA AMOASEI',
  *     cargo: 'Desenvolvedora de software e instrutora',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  *     time: times[0].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'DANIEL ARTINE',
  *     cargo: 'Engenheiro de Software na Stone Age',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  *     time: times[0].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'GUILHERME LIMA',
  *     cargo: 'Desenvolvedor Python e JavaScript na Alura',
  *     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  *     time: times[0].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'PAULO SILVEIRA',
  *     cargo: 'Hipster e CEO da Alura',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  *     time: times[0].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'JULIANA AMOASEI',
  *     cargo: 'Desenvolvedora de software e instrutora',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  *     time: times[1].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'DANIEL ARTINE',
  *     cargo: 'Engenheiro de Software na Stone Age',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  *     time: times[1].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'GUILHERME LIMA',
  *     cargo: 'Desenvolvedor Python e JavaScript na Alura',
  *     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  *     time: times[1].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'PAULO SILVEIRA',
  *     cargo: 'Hipster e CEO da Alura',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  *     time: times[1].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'JULIANA AMOASEI',
  *     cargo: 'Desenvolvedora de software e instrutora',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  *     time: times[2].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'DANIEL ARTINE',
  *     cargo: 'Engenheiro de Software na Stone Age',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  *     time: times[2].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'GUILHERME LIMA',
  *     cargo: 'Desenvolvedor Python e JavaScript na Alura',
  *     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  *     time: times[2].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'PAULO SILVEIRA',
  *     cargo: 'Hipster e CEO da Alura',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  *     time: times[2].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'JULIANA AMOASEI',
  *     cargo: 'Desenvolvedora de software e instrutora',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  *     time: times[3].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'DANIEL ARTINE',
  *     cargo: 'Engenheiro de Software na Stone Age',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  *     time: times[3].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'GUILHERME LIMA',
  *     cargo: 'Desenvolvedor Python e JavaScript na Alura',
  *     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  *     time: times[3].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'PAULO SILVEIRA',
  *     cargo: 'Hipster e CEO da Alura',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  *     time: times[3].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'JULIANA AMOASEI',
  *     cargo: 'Desenvolvedora de software e instrutora',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  *     time: times[4].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'DANIEL ARTINE',
  *     cargo: 'Engenheiro de Software na Stone Age',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  *     time: times[4].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'GUILHERME LIMA',
  *     cargo: 'Desenvolvedor Python e JavaScript na Alura',
  *     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  *     time: times[4].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'PAULO SILVEIRA',
  *     cargo: 'Hipster e CEO da Alura',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  *     time: times[4].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'JULIANA AMOASEI',
  *     cargo: 'Desenvolvedora de software e instrutora',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  *     time: times[5].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'DANIEL ARTINE',
  *     cargo: 'Engenheiro de Software na Stone Age',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  *     time: times[5].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'GUILHERME LIMA',
  *     cargo: 'Desenvolvedor Python e JavaScript na Alura',
  *     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  *     time: times[5].nome,
  *     favorito: false
  *   },
  *   {
  *     id: uuid(),
  *     nome: 'PAULO SILVEIRA',
  *     cargo: 'Hipster e CEO da Alura',
  *     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  *     time: times[5].nome,
  *     favorito: false
  *   },
  * ]
  */

  // const [colaboradores, setColaboradores] = useState(colaboradores)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuid() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }))
  }

  useEffect(() => {

    fetch('http://localhost:8080/times')
      .then(resposta => resposta.json())
      .then(setTimes)
      .then(console.log("times2", times))

    fetch('http://localhost:8080/colaboradores')
      .then(resposta => resposta.json())
      .then(setColaboradores)
      .then(console.log("colaboradores2", colaboradores))

  }, [])

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador =>
          setColaboradores([...colaboradores, colaborador])}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) =>
          <Time
            aoFavoritar={resolverFavorito}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              colaborador => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
          />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
