import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '../configSignIn/firebase';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const addProduct = () => {
    const newProduct = {
      name: productName,
      category: productCategory,
      price: productPrice,
    };
    const productRef = ref(database, `productos/${productName}`);
    set(productRef, newProduct);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoría del producto"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Precio del producto"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={addProduct}>Agregar</button>
    </div>
  );
};

export default AddProduct;
