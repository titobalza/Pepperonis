import React from "react";
import icono from "../../img/fondo.png";
import caja from "../../img/box1.png";

const Nosotros = () => {
  return (
    <div
      className="p-3 text-white"
      style={{
        backgroundImage: `url(${icono})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <div
        className="primercuadro p-4 mb-4"
        style={{ 
          backgroundImage: `url(${caja})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <h1 className="mb-3">Historia de nuestra pizzería</h1>
        <p>
          En nuestra pizzería imaginaria, nos enorgullece ofrecer las mejores pizzas de la ciudad. Nuestra historia comenzó hace más de 20 años, cuando nuestro fundador, Juan Pérez, decidió abrir un pequeño local de pizzas en el corazón de la ciudad.
        </p>
      </div>
      <div className="bg-dark p-3 mb-3 rounded">
        <p>
          Desde entonces, nos hemos dedicado a perfeccionar nuestras recetas y a utilizar los ingredientes más frescos y de la más alta calidad. Nuestro objetivo siempre ha sido brindar a nuestros clientes una experiencia culinaria excepcional y satisfacer sus paladares exigentes.
        </p>
        <p>
          A lo largo de los años, hemos expandido nuestro negocio y hemos abierto varias sucursales en toda la ciudad. Nuestro compromiso con la calidad y el servicio al cliente nos ha convertido en una de las pizzerías más populares de la zona.
        </p>
        <p>
          Además de nuestras deliciosas pizzas, también ofrecemos una variedad de entrantes, ensaladas y postres para complementar tu comida. Nuestro equipo de chefs talentosos trabaja arduamente para crear nuevos sabores y mantener nuestro menú fresco y emocionante.
        </p>
        <p>
          Gracias a nuestros fieles clientes, hemos ganado varios premios y reconocimientos a lo largo de los años. Estamos comprometidos a seguir brindando un servicio excepcional y a superar las expectativas de nuestros clientes en cada visita.
        </p>
        <p>
          ¡Te invitamos a visitar nuestra pizzería y disfrutar de una experiencia gastronómica única!
        </p>
      </div>
    </div>
  );
};

export default Nosotros;