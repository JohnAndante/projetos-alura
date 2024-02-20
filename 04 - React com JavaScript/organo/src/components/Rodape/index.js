import './Rodape.css';

const Rodape = () => {

  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href='facebook.com' target='_blank'>
              <img src={require('../../images/fb.png')} alt='facebook' />
            </a>
          </li>
          <li>
            <a href='twitter.com' target='_blank'>
              <img src={require('../../images/tw.png')} alt='twitter' />
            </a>
          </li>
          <li>
            <a href='instagram.com' target='_blank'>
              <img src={require('../../images/ig.png')} alt='instagram' />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src={require('../../images/logo.png')} alt='logo' />
      </section>

      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
