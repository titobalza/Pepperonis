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
      Object.keys(data).forEach(category => {
        const categoryProducts = Object.entries(data[category]);
        categoryProducts.forEach(([id, product]) => {
          productsArray.push({ ...product, id, category });
        });
      });

      setProducts(productsArray);
    });
  }, []);

  const deleteProduct = (product) => {
    const productRef = ref(database, `productos/${product.category}/${product.id}`);
    remove(productRef).then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p.id !== product.id)
      );
    });
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="productx-item">
            <span className="productx-details">
              {product.name} - {product.category} - ${product.price}
            </span>
            <FaTrashAlt className="deletex-icon" onClick={() => deleteProduct(product)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteProduct;
