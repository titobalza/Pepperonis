import React from "react";
import "../../styles/home.css";
import { Carousel } from "../component/carousel"; // Importamos el componente Carousel

export const Home = () => (
    <div className="principal">
        <div className="carrusel">
            <p id="presentacion">VEN A<br/>CONOCERNOS<br/>EN LA FERIA</p>
        </div>
        
        <div className="carrusel-imagenes">
            <Carousel />
        </div>
    </div>
);