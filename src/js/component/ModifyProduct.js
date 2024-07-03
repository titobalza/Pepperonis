import React, { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { database } from '../configSignIn/firebase';
import { FaEdit } from 'react-icons/fa'; 

const ModifyProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProductName, setNewProductName] = useState('');

  // Recuperar productos al montar el componente
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

  // Función para iniciar la edición de un producto
  const startEditing = (product) => {
    setEditingProductId(product.id);
    setNewProductName(product.name);
  };

  // Función para guardar los cambios
  const saveChanges = (productId) => {
    const productRef = ref(database, `productos/${productId}`);
    update(productRef, { name: newProductName }).then(() => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId ? { ...product, name: newProductName } : product
        )
      );
      setEditingProductId(null);
    });
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="productx-item">
            {editingProductId === product.id ? (
              <input
                type="text"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
              />
            ) : (
              <span className="productx-name">{product.name}</span>
            )}
            {editingProductId === product.id ? (
              <button onClick={() => saveChanges(product.id)}>Guardar</button>
            ) : (
              <FaEdit className="editx-icon" onClick={() => startEditing(product)} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModifyProduct;