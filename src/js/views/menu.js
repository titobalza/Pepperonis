import React from 'react';
import icono from "../../img/fondo.png";
import { ref, onValue } from "firebase/database";
import { database } from '../configSignIn/firebase';
import { useState, useEffect } from 'react';


const Product = ({ product, addToCart }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.category}</p>
        <p className="card-text">Bs. {product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
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
    <div 
      className="bg-image"
      style={{
        backgroundImage: `url(${icono})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        <div className="filter-bar mb-4 p-1">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-buttons d-flex flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn btn-secondary me-2 mb-2 ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          {filteredProducts.map((product, index) => (
            <Product key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;