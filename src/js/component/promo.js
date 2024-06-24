import React, { useState } from 'react';
import pizza from "../../img/pizza.png"; // Asegúrate de tener la imagen de la pizza
import cocaCola from "../../img/cocaCola.png"; // Asegúrate de tener la imagen de la Coca-Cola

const Carrusel = () => {
  const [contenido, setContenido] = useState([
    <div>
      <img src={pizza} alt="Pizza" className="img-fluid promo-img" />
      <img src={cocaCola} alt="Coca Cola" className="img-fluid promo-img" />
      <h3 className="fw-bold mt-3">POR TAN SOLO</h3>
      <h1 className="display-3 fw-bold">Ref. 10</h1>
    </div>,
    <div>
      <img src={pizza} alt="Pizza" className="img-fluid promo-img" />
      <img src={cocaCola} alt="Coca Cola" className="img-fluid promo-img" />
      <h3 className="fw-bold mt-3">POR TAN SOLO</h3>
      <h1 className="display-3 fw-bold">Ref. 20</h1>
    </div>,
    <div>
      <img src={pizza} alt="Pizza" className="img-fluid promo-img" />
      <img src={cocaCola} alt="Coca Cola" className="img-fluid promo-img" />
      <h3 className="fw-bold mt-3">POR TAN SOLO</h3>
      <h1 className="display-3 fw-bold">Ref. 999</h1>
    </div>
  ]);

  const [indice, setIndice] = useState(0);

  const cambiarContenido = () => {
    if (indice === contenido.length - 1) {
      setIndice(0);
    } else {
      setIndice(indice+1);
    }
  };

  const regresarContenido = () => {
    if (indice === 0) {
      setIndice(contenido.length - 1);
    } else {
      setIndice(indice - 1);
    }
  };

  return (
    <div>
      {contenido[indice]}
      <button className="btn btn-warning position-absolute top-50 start-0 translate-middle-y rounded-circle" onClick={regresarContenido}>&lt;</button>
      <button className="btn btn-warning position-absolute top-50 end-0 translate-middle-y rounded-circle" onClick={cambiarContenido}>&gt;</button>
    </div>
  );
};

export default Carrusel;

