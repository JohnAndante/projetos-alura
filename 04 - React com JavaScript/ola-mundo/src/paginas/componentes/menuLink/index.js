import { Link, useLocation } from 'react-router-dom';

import styles from './MenuLink.module.css';

const MenuLink = ({ children, to }) => {
  const localizacao = useLocation().pathname;


  return (
    <Link
      className={`
        ${styles.link}
        ${localizacao === to ? styles['link-destacado'] : ""}
        `} to={to}>
      {children}
    </Link>

  );
};

export default MenuLink;
