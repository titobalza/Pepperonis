import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icono from "../../img/logo.png";
import icono2 from "../../img/unimet.png";

export const Navbar = () => {
  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToken(sessionStorage.getItem("token"));
      setAdmin(sessionStorage.getItem("admin"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="navbar navbar-light bg-D59E3B ps-3 ">
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
          {token && !admin ? (
            <>
              <li className="nav-item d-flex align-items-stretch">
                <Link to="/cart" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center" >MI PEDIDO</Link>
              </li>
              <li className="nav-item d-flex align-items-stretch">
                <Link to="/profile" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center" >MI PERFIL</Link>
              </li>
            </>
          ) : admin ? (
            <>
              <li className="nav-item d-flex align-items-stretch">
                <Link to="/admin" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center" >MODIFICAR<br />MENÚ</Link>
              </li>
              <li className="nav-item d-flex align-items-stretch border border-dark">
                <Link to="/login" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center bg-D59E3B">ADMINISTRADOR</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item d-flex align-items-stretch">
                <Link to="/signup" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center" >CREAR<br />CUENTA</Link>
              </li>
              <li className="nav-item d-flex align-items-stretch border border-dark">
                <Link to="/login" className="btn btn-outline-dark btn-square d-flex align-items-center justify-content-center bg-D59E3B">INICIAR<br />SESIÓN</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};