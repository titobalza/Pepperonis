import React from "react";
import icono from "../../img/fondo.png";


const Nosotros = () => {
  return (
    <div
  className="p-3 text-white"
  style={{
    backgroundImage: `url(${icono})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  }}
>
  <div className="text-white p-4 shadow fondo-transparente">
    <h1 className="mb-3 titulo">Historia de Nuestra Pizzería</h1>
    <p className="parrafo">
      En nuestra pizzería, nos enorgullece ofrecer las mejores pizzas de la Unimet. Nuestra historia comenzó hace muchos años, cuando nuestro fundador, decidió abrir un pequeño local de pizzas en la Universidad.
      Desde entonces, nos hemos dedicado a perfeccionar nuestras recetas y técnicas de preparación para garantizar que cada pizza sea una experiencia única y deliciosa. Nuestro talentoso equipo trabaja arduamente para seleccionar los ingredientes más frescos y de alta calidad, desde la masa hasta los ingredientes para el relleno.
    </p>
  </div>
  <div className="d-flex flex-wrap">
    <div className="col-12 col-md-4 text-center text-md-left mb-3">
      <img
        src={require("../../img/chef.png").default}
        alt="Chef"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
    <div className="col-12 col-md-8 fondo-transparente p-3 mt-3">
      <div className="p-4" style={{ color: "black" }}>
        <p>
          Desde entonces, nos hemos dedicado a perfeccionar nuestras recetas y a utilizar los ingredientes más frescos y de la más alta calidad. Nuestro objetivo siempre ha sido brindar a nuestros clientes una experiencia culinaria excepcional y satisfacer sus paladares exigentes.
        </p>
        <p>
          Además de nuestras deliciosas pizzas, también ofrecemos una variedad de platos fuertes para complementar tu comida. Nuestro equipo trabaja arduamente para crear nuevos sabores y mantener nuestro menú fresco y emocionante.
        </p>
        <p>
          Gracias a nuestros fieles clientes, hemos ganado el amor de los estudiantes a lo largo de los años. Estamos comprometidos a seguir brindando un servicio excepcional y a superar las expectativas de nuestros clientes en cada visita.
        </p>
        <p>
          ¡Te invitamos a visitar nuestra pizzería y disfrutar de una experiencia gastronómica única!
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Nosotros;