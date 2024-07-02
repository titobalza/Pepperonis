import React from 'react';
import icono from "../../img/fondo.png";
import { ref, onValue } from "firebase/database";
import { database } from '../configSignIn/firebase';
import { useState, useEffect } from 'react';

const Product = ({ product, addToCart }) => (
  <div className="product">
    <h2>{product.name}</h2>
    <p>{product.category}</p>
    <p>{product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

const Menu = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['all']);

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

  // Filter products based on search term and selected filter
  const filteredProducts = products.filter(product => {
    const matchesSearchTerm = product.name?.toLowerCase().includes(searchTerm.toLowerCase());
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
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? 'active' : ''}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="menu">
        {filteredProducts.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;