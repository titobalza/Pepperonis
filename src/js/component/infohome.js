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
            <p>Somos una reconocida pizzería ubicada en la Universidad Metropolitana (UNIMET), con años de experiencia en el arte de la pizza y la cocina italiana. Nos dedicamos a ofrecer a los estudiantes y comensales una deliciosa selección de pizzas caseras, así como platos fuertes como risotto y pasta, preparados con los ingredientes más frescos y auténticos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
