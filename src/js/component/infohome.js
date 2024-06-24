import React from "react";
import "../../styles/promocion.css"; // Archivo CSS para estilos personalizados'
import Carrusel from "../component/promo";

export const Promocion = () => {
  return (
    <div className="container my-5 mt-0">
      <div className=" promos row align-items-center">
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
