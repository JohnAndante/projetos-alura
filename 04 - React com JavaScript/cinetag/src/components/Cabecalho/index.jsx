import React from "react";
import { Link } from "react-router-dom";

import CabecalhoLink from "../CabecalhoLink";
import styles from './Cabecalho.module.css';

import logo from '/images/logo.png';

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to="/">
        <img src={logo} alt="Logo do Cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url="/">
          Home
        </CabecalhoLink>
        <CabecalhoLink url="/Favoritos">
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}

export default Cabecalho;
