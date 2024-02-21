import { useEffect, useState } from "react";

import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';
import { ITime } from "./components/shared/interfaces/ITime";
import { IColaborador } from "./components/shared/interfaces/IColaborador";


function App() {

  const [times, setTimes] = useState([] as ITime[]);
  const [colaboradores, setColaboradores] = useState([] as IColaborador[]);

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

  function deletarColaborador(id: number) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor: string, id: number) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time;
    }));
  }

  const cadastrarTime = (novoTime: any) => {
    setTimes([...times, { ...novoTime, id: novoTime.nome }])
  }

  const resolverFavorito = (id: number) => {
    setColaboradores(colaboradores.map((colaborador) => {
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

    fetch('http://localhost:8080/colaboradores')
      .then(resposta => resposta.json())
      .then(setColaboradores)

  }, [])

  return (
    <>
      <Banner src={'/imagens/banner.png'} alt={'Logo do Organo'} />

      <main>
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
      </main>

      <Rodape />
    </>
  );
}

export default App;
