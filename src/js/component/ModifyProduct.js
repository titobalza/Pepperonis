import React, { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { database } from '../configSignIn/firebase';
import { FaEdit } from 'react-icons/fa'; 

const ModifyProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

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

  const startEditing = (product) => {
    setEditingProductId(product.id);
    setNewProductName(product.name);
    setNewProductCategory(product.category);
    setNewProductPrice(product.price);
  };

  const saveChanges = (product) => {
    const productRef = ref(database, `productos/${product.category}/${product.id}`);
    const updatedProduct = {
      name: newProductName,
      category: newProductCategory,
      price: parseFloat(newProductPrice),
    };
    update(productRef, updatedProduct).then(() => {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...updatedProduct, id: product.id } : p
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
              <div>
                <input
                  type="text"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                />
                <input
                  type="text"
                  value={newProductCategory}
                  onChange={(e) => setNewProductCategory(e.target.value)}
                />
                <input
                  type="text"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                />
              </div>
            ) : (
              <span className="productx-details">
                {product.name} - {product.category} - Bs. {product.price}
              </span>
            )}
            {editingProductId === product.id ? (
              <button onClick={() => saveChanges(product)}>Guardar</button>
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