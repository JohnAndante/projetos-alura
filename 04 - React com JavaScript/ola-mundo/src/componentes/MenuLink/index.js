import { Link, NavLink, useLocation } from 'react-router-dom';

import styles from './MenuLink.module.css';

const MenuLink = ({ children, to }) => {
  const localizacao = useLocation().pathname;


  return (
    <NavLink
      className={`
        ${styles.link}
        ${localizacao === to ? styles['link-destacado'] : ""}
        `} to={to}>
      {children}
    </NavLink>

  );
};

export default MenuLink;
