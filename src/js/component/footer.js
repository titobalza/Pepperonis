import React, { Component } from "react";
import fondo from "../../img/fondo-footer.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center" 
		style={{ 
			backgroundColor: "#D22B1C", 
			borderTopLeftRadius: "50%", 
			borderTopRightRadius: "50%", 
			backgroundImage:fondo, 
			backgroundSize: "cover", 
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center"
		}}
	>
	  <p>
		Made with <i className="fa fa-heart text-danger" /> by{" "}
		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
	  </p>
	</footer>
);
