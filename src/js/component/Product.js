import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default Product;