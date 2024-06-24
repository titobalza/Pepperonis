import React from "react";
import pizza from "../../img/pizza.png"; // Asegúrate de tener la imagen de la pizza
import cocaCola from "../../img/cocaCola.png"; // Asegúrate de tener la imagen de la Coca-Cola
import "../../styles/promocion.css"; // Archivo CSS para estilos personalizados'
import Carrusel from "../component/promo";

export const Promocion = () => {
  return (
    <div className="container my-5 mt-0">
      <div className="row align-items-center p-4 ">
        <div className="col-md-6 d-flex align-items-center justify-content-center position-relative promo-box">
          <Carrusel/>
        </div>
        <div className="col-md-6">
          <div className="bg-danger text-white p-4 rounded shadow">
            <h2 className="fw-bold">¿Quiénes Somos?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus mauris non neque faucibus, eu gravida velit aliquet. Nullam vitae diam eget eros finibus eleifend. Fusce consectetur velit nunc, at lobortis odio auctor id. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
