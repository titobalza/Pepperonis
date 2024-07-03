import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { database } from '../configSignIn/firebase';
import { FaTrashAlt } from 'react-icons/fa'; 

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = ref(database, 'productos');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val() || {};
      
  
      const productsArray = [];
      const categoriesSet = new Set();

      Object.keys(data).forEach(category => {
        categoriesSet.add(category);
        const categoryProducts = Object.values(data[category]);
        categoryProducts.forEach(product => {
          productsArray.push({ ...product, category });
        });
      });

      // Set the products and categories state
      setProducts(productsArray);
      setCategories(['all', ...Array.from(categoriesSet)]);
    });
  }, []);

  // Función para eliminar un producto
  const deleteProduct = (productId) => {
    const productRef = ref(database, `productos/${productId}`);
    remove(productRef).then(() => {
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
    });
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="productx-item">
            <span className="productx-name">{product.name}</span> 
            <FaTrashAlt className="trashx-icon" onClick={() => deleteProduct(product.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteProduct;
