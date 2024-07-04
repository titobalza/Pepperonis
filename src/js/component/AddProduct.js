import React, { useState, useEffect } from 'react';
import { ref, set, onValue, push } from 'firebase/database';
import { database } from '../configSignIn/firebase';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const categoriesRef = ref(database, 'productos');
    onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCategories(Object.keys(data));
      }
    });
  }, []);

  const addProduct = () => {
    const categoryToUse = productCategory === 'new' ? newCategory : productCategory;
    const newProduct = {
      name: productName,
      category: categoryToUse,
      price: parseFloat(productPrice),
    };
    const productRef = ref(database, `productos/${categoryToUse}`);
    const newProductRef = push(productRef);
    set(newProductRef, newProduct);

    // Clear inputs after adding the product
    setProductName('');
    setProductCategory('');
    setProductPrice('');
    setNewCategory('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <select
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      >
        <option value="">Selecciona una categoría</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
        <option value="new">Nueva categoría</option>
      </select>
      {productCategory === 'new' && (
        <input
          type="text"
          placeholder="Nueva categoría"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
      )}
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