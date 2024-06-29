// src/views/cart.js
import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h3>Su pedido:</h3>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
