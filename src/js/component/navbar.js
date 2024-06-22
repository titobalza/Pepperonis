import React from "react";
import { Link } from "react-router-dom";
import icono from "../../img/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-D59E3B mb-3">
      <Link to="/">
        <img src={icono} alt="Icono" className="navbar-brand mb-0 h1" />
      </Link>
      <div className="ml-auto d-flex align-items-stretch">
        <Link to="/menu" className="btn btn-outline-dark btn-square ">MENÚ</Link>
        <Link to="/nosotros" className="btn btn-outline-dark btn-square ">NOSOTROS</Link>
        <Link to="/crear-cuenta" className="btn btn-outline-dark btn-square ">CREAR CUENTA</Link>
        <Link to="/login" className="btn btn-outline-dark btn-square ">INICIAR SESIÓN</Link>
      </div>
    </nav>
  );
};