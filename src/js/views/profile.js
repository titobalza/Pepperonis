import React, { useState, useEffect } from 'react';
import { ref, set, get, child } from 'firebase/database';
import { database } from '../configSignIn/firebase';
import '../../styles/profile.css';
import icono from "../../img/fondo.png";

const Profile = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const userId = localStorage.getItem("token");

  useEffect(() => {
    if (userId) {
      const userRef = ref(database, `infoUsuarios/${userId}`);
      get(child(userRef, '/')).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setName(data.name);
          setPhone(data.phone);
          setAddress(data.address);
          setCity(data.city);
          setState(data.state);
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [userId]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRef = ref(database, `infoUsuarios/${userId}`);
    set(userRef, {
      name,
      phone,
      address,
      city,
      state
    }).then(() => {
      console.log('Datos guardados exitosamente');
    }).catch((error) => {
      console.error('Error al guardar los datos:', error);
    });
  };

  return (
    <div style={{ backgroundImage: `url(${icono})` }}>
      <div className="profile-container">
        <h1>Mi Perfil</h1>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Nombre y Apellido</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Dirección</label>
            <input 
              type="text" 
              id="address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <input 
              type="text" 
              id="city" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">Estado</label>
            <input 
              type="text" 
              id="state" 
              value={state} 
              onChange={(e) => setState(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="save-button">Guardar Cambios</button>
          <button type="button" className="btn btn-primary pt-3" onClick={handleLogout}>
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;