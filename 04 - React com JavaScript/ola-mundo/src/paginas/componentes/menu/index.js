import styles from './Menu.module.css';
import MenuLink from '../menuLink';

const Menu = () => {


  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/sobre-mim">Sobre Mim</MenuLink>
      </nav>
    </header>
  )
}

export default Menu;
