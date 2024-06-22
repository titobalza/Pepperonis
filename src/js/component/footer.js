import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center" style={{ backgroundColor: "#D22B1C", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", backgroundSize: "100% 100%", backgroundImage: "radial-gradient(circle at top right, #D22B1C 0%, transparent 100%)" }}>
	  <p>
		Made with <i className="fa fa-heart text-danger" /> by{" "}
		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
	  </p>
	</footer>
  );
