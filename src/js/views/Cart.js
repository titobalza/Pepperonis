import React, { useEffect, useState } from 'react';
import { ref, set, get, child } from 'firebase/database';
import { database } from '../configSignIn/firebase';

// Helper function to save cart to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const [userName, setUserName] = useState('');
  const [isNameLoaded, setIsNameLoaded] = useState(false);

  useEffect(() => {
    const savedCart = loadCartFromLocalStorage();
    setCart(savedCart);
    updateTotal(savedCart);

    const email = sessionStorage.getItem('email');
    if (email) {
      const sanitizedEmail = email.replace(/[^\w\s]/gi, '');
      const userRef = ref(database, `infoUsuarios/${sanitizedEmail}`);

      get(child(userRef, '/')).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserName(data.name || '');
          setIsNameLoaded(true);
        } else {
          setIsNameLoaded(true);
        }
      }).catch((error) => {
        console.error('Error al obtener los datos del usuario:', error);
        setIsNameLoaded(true);
      });
    } else {
      setIsNameLoaded(true);
    }
  }, [setCart]);

  useEffect(() => {
    saveCartToLocalStorage(cart);
    updateTotal(cart);
  }, [cart]);

  const updateTotal = (cart) => {
    const totalAmount = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    setTotal(totalAmount);
  };

  const removeFromCart = (index) => {
    const newCart = cart.slice();
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index, quantity) => {
    const newCart = cart.slice();
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  const handlePay = () => {
    if (!userName) {
      alert('Por favor, rellena tus datos en "Mi Perfil" para completar tu pedido.');
      return;
    }

    const order = {
      name: userName,
      products: cart,
      time: new Date().toISOString(),
    };

    const newOrderRef = ref(database, `pedidos/${Date.now()}`);
    set(newOrderRef, order)
      .then(() => {
        console.log('Pedido guardado exitosamente');
        localStorage.removeItem('cart');
        setCart([]);
      })
      .catch((error) => {
        console.error('Error al guardar el pedido:', error);
      });
  };

  return (
    <div className="container py-5">
      <h3>Su pedido {userName} :</h3>
      {!isNameLoaded ? (
        <p>Cargando datos...</p>
      ) : cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((product, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{product.name}</h5>
                  <p>{product.category}</p>
                  <p>${product.price.toFixed(2)}</p>
                  <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      value={product.quantity}
                      onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          {userName ? (
            <button className="btn btn-primary" onClick={handlePay}>PAGAR</button>
          ) : (
            <p className="text-danger">Por favor, rellena tus datos en "Mi Perfil" para completar tu pedido.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;