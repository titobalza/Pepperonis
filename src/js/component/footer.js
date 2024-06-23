import React from "react";
import footerImage from '../../img/footer1.png';
import backgroundImage from '../../img/fondo.png';

export const Footer = () => (
    <footer className="container-fluid" style={{
		backgroundImage: ` url(${footerImage}),url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		height: "50vh",
		position: 'absolute', // Ajusta este valor según tus necesidades
		width: '100%',
	}} >
		<div className="footer-content">
		<div className="footer-column t-20">
				<ul>
					<li><a href="/">Inicio</a></li>
					<li><a href="/nosotros">Nosotros</a></li>
					<li><a href="/crear-cuenta">Crear Cuenta</a></li>
					<li><a href="/iniciar-sesion">Iniciar Sesión</a></li>
				</ul>
			</div>
		</div>
	</footer>
);