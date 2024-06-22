import React from "react";
import { Link } from "react-router-dom";
import icono from "../../img/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-D59E3B mb-3">
      <Link to="/">
	  	<img src={icono} alt="Icono" className="navbar-brand mb-0 h1" />
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav d-flex flex-row ">
          <li className="nav-item ">
            <Link to="/menu" className="flex-fill btn btn-outline-dark btn-square">MENÚ</Link>
          </li>
          <li className="nav-item">
            <Link to="/nosotros" className="flex-fill btn btn-outline-dark btn-square">NOSOTROS</Link>
          </li>
          <li className="nav-item">
            <Link to="/crear-cuenta" className="flex-fill btn  btn-outline-dark btn-square">CREAR CUENTA</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="flex-fill btn btn-outline-dark btn-square">INICIAR SESIÓN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};