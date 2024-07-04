import React from 'react';
import "../../styles/home.css";
import { Carousel } from "../component/carousel"; // Importamos el componente Carousel
import { Promocion } from "../component/infohome";
import icono from "../../img/fondo.png";

export const Home = () => (
    <div className="home">
        <div className="principal">
            <div className="carrusel">
                <p id="presentacion">VEN A<br/>CONOCERNOS<br/>EN LA FERIA</p>
            </div>
            
            <div className="carrusel-imagenes mt-0">
                <Carousel />
            </div>
        </div>
        <div className="segundaparte" style={{backgroundImage:`url(${icono})` }}>
				<Promocion />
        </div>
    </div>
);