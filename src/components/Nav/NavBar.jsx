import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

//Componetizamos la barra de navegación NavBar para poder navegar y usamos el Link para poder vincularlo con los path de App.jsx y movernos entre componentes.

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/form">POSTEAR</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
