import React from 'react';
import Product from '../component/Product';
import products from '../component/products';
const Menu = ({ addToCart }) => {
  return (
    <div>
      <h2>Menú de Pizzas</h2>
      <div className="menu">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};
export default Menu;

