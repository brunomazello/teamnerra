import React from "react";
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <nav className={styles.navbar_container} id="inicio">
      <h1>Team N Erra</h1>
      <ul>
        <Link
          activeClass="active"
          to="inicio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>Início</li>
        </Link>
        <Link
          activeClass="active"
          to="sobre"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>Sobre</li>
        </Link>
        <Link
          activeClass="active"
          to="consultor"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>Participe</li>
        </Link>
        <Link
          activeClass="active"
          to="consultor"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>Contato</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
