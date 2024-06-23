import React, { Component } from "react";
import fondo from "../../img/fondo-footer.png";

export const Footer = () => (
  <div>
    <div style={{ backgroundColor: "#D22B1C", position: "relative" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: "absolute", top: 0, width: "100%" }}>
        <path fill="#D22B1C" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <footer className="footer mt-auto py-3 text-center" style={{ paddingTop: "2rem", backgroundSize: "cover", backgroundPosition: "center center" }}>
	  Made with <i className="fa fa-heart text-danger" /> by{" "}
	  <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
      </footer>
    </div>
  </div>
);