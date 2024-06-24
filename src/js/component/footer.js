import React from "react";
import footerImage from '../../img/footer1.png';
import backgroundImage from '../../img/fondo.png';

export const Footer = () => (
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
			<div className="footer-column" style={{ marginTop: "120px" }}>
				<ul style={{ listStyleType: "none", padding:"2rem" }}>
					<li><a href="/" style={{ color: "white" , textDecoration: "none"}}>Inicio</a></li>
					<li><a href="/nosotros"style={{ color: "white" , textDecoration: "none"}}>Nosotros</a></li>
					<li><a href="/signup"style={{ color: "white" , textDecoration: "none"}}>Crear Cuenta</a></li>
					<li><a href="/login"style={{ color: "white" , textDecoration: "none"}}>Iniciar Sesión</a></li>
				</ul>
			</div>
		</div>
	</footer>
);