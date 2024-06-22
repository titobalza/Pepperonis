import React from "react";
import { Link } from "react-router-dom";
import icono from "../../img/logo.png";
import icono2 from "../../img/unimet.png";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-D59E3B mb-3">
      <div className="sidel d-flex g-1">
		<img src={icono2} alt="Icono" className="navbar-brand mb-0 h1" />
		<Link to="/">
			<img src={icono} alt="Icono" className="navbar-brand mb-0 h1" />
		</Link>
	  </div>
      <div className="ml-auto d-flex align-items-stretch">
        <ul className="navbar-nav flex-row">
          <li className="nav-item d-flex align-items-stretch">
            <Link to="/menu" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center" style={{height: 100}}>MENÚ</Link>
          </li>
          <li className="nav-item d-flex align-items-stretch">
            <Link to="/nosotros" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center" >NOSOTROS</Link>
          </li>
          <li className="nav-item d-flex align-items-stretch">
            <Link to="/crear-cuenta" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center" >CREAR<br />CUENTA</Link>
          </li>
          <li className="nav-item d-flex align-items-stretch">
            <Link to="/login" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center">INICIAR<br />SESIÓN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};