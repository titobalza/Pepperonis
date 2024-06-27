import React, { useState } from 'react';
import Product from '../component/Product';
import products from '../component/products';
import icono from "../../img/fondo.png";


const Menu = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Filtrar productos basado en la búsqueda y el filtro seleccionado
  const filteredProducts = products.filter(product => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || product.category === filter;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div style={{
      backgroundImage: `url(${icono})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}>
      <h2>Menú Pepperoni's</h2>
      <div>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todos</option>
          <option value="vegetarian">Vegetariano</option>
          <option value="bebida">Bebida</option>
          <option value="rissotto">Rissotto</option>
          <option value="meat">Carne</option>
          <option value="seafood">Mariscos</option>
          {/* Agrega más opciones según las categorías de tus productos */}
        </select>
      </div>
      <div className="menu">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
