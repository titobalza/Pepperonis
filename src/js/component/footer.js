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
			// Aquí puedes agregar tus elementos
		</div>
	</footer>
);