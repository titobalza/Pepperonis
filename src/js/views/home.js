import React from "react";
import "../../styles/home.css";
import {Carousel} from "../component/carousel"; // Importamos el componente Carousel

export const Home = () => (
    <div className="principal">
        {/* Div que contiene el cuadro rojo con el texto */}
        <div className="carrusel">
            <p id="presentacion">VEN A<br/>CONOCERNOS<br/>EN LA FERIA</p>
        </div>
        
        {/* Div donde se mostrará el carrusel de imágenes */}
        <div className="carrusel-imagenes">
            <Carousel /> {/* Renderizamos el componente Carousel */}
        </div>
    </div>
);
