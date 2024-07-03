import React, { useState, useEffect } from "react";
import footerImage from '../../img/footer1.png';
import backgroundImage from '../../img/fondo.png';
import logo from "../../img/logo.png";
import FabButton from "../component/FabButton";
import { Link } from "react-router-dom";
import FeedbackForm from "./FeedbackForm";


export const Footer = () => {
	const [token, setToken] = useState(sessionStorage.getItem("token"));
	const [admin, setAdmin] = useState(sessionStorage.getItem("admin"));
	useEffect(() => {
		const intervalId = setInterval(() => {
		  setToken(sessionStorage.getItem("token"));
		  setAdmin(sessionStorage.getItem("admin"));
		}, 1000);
	
		return () => clearInterval(intervalId);
	  }, []);

	return (
		<footer className="container-fluid" style={{
			backgroundImage: `url(${footerImage}), url(${backgroundImage})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			height: "62vh",
			position: 'absolute', // Ajusta este valor según tus necesidades
			width: '100%',
		}} >
			<div className="footer-content">
				<div className="footer-row">
					<div className="footer-column" style={{paddingTop:'120px'}}>

					<div><FabButton/></div>
					<p style={{color:'white',paddingTop:'5px'}}>Contáctanos</p>
					<div className="logofooter"><img src={logo} alt="Logo" className="img-fluid prom-img" /></div>
						
					</div>
					<ul style={{ listStyleType: "none",paddingTop:'160px',paddingRight:'70px',paddingBottom:'10px'}}>
							<li><Link to="/"  style={{ color: "white" , textDecoration: "none"}}>Inicio</Link></li>
							<li><Link to="/menu"  style={{ color: "white" , textDecoration: "none"}}>Menú</Link></li>
							<li><Link to="/nosotros"  style={{ color: "white" , textDecoration: "none"}}>Nosotros</Link></li>
							{token && !admin ? (
								<div style={{display:'flex',flexDirection:'row'}}>
								<div>
								<li><Link to="/pedido"  style={{ color: "white" , textDecoration: "none"}}>Mi Pedido</Link></li>
								<li><Link to="/login"  style={{ color: "white" , textDecoration: "none"}}>Mi Cuenta</Link></li>
								</div>
								<div style={{paddingLeft:'50px',marginBottom:'0px'}}><FeedbackForm/></div>
								</div>
							) : admin ? (
								<>
								<li><Link to="/admin"  style={{ color: "white" , textDecoration: "none"}}>Ver Estadísticas</Link></li>
								  <li><Link to="/modify-menu"  style={{ color: "white" , textDecoration: "none"}}>Modificar Menú</Link></li>
								  <li><Link to="/login"  style={{ color: "white" , textDecoration: "none"}}>Administrador</Link></li>
								</>
							) : (
								<>
								<li><Link to="/signup"  style={{ color: "white" , textDecoration: "none"}}>Crear Cuenta</Link></li>
								<li><Link to="/login"  style={{ color: "white" , textDecoration: "none"}}>Iniciar Sesión</Link></li>
								</>
							)}
					</ul>
					
				</div>
			</div>
			
		</footer>
	);
};









