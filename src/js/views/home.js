import React from "react";
import "../../styles/home.css";
import { Carousel } from "../component/carousel"; // Importamos el componente Carousel
import icono from "../../img/fondo.png";


export const Home = () => (
    <div className="home" style={{ overflowX: "hidden" ,position:"relative"}}>
		<div className="principal">
			<div className="carrusel">
				<p id="presentacion">VEN A<br/>CONOCERNOS<br/>EN LA FERIA</p>
			</div>
			
			<div className="carrusel-imagenes">
				<Carousel />
			</div>
		</div>
		<div className="segundaparte" style={{backgroundImage:`url(${icono})` }}>
			<p>hola</p>
		</div>

    </div>
);