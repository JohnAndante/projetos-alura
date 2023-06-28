import './style.css';
import Logo         from '../../components/Logo/index';
import IconesHeader from '../../components/IconesHeader';
import OpcoesHeader from '../../components/OpcoesHeader';

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}

export default Header;
