import React, { useState, useEffect } from 'react';
import { ref, set, get, child } from 'firebase/database';
import { database } from '../configSignIn/firebase';
import '../../styles/profile.css';
import icono from "../../img/fondo.png";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const email = sessionStorage.getItem("email");
  const sanitizedEmail = email ? email.replace(/[^\w\s]/gi, '') : null;

  console.log('Email from sessionStorage:', email);
  console.log('Sanitized Email:', sanitizedEmail);

  useEffect(() => {
    if (sanitizedEmail) {
      const userRef = ref(database, `infoUsuarios/${sanitizedEmail}`);
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
  }, [sanitizedEmail]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("admin");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sanitizedEmail) {
      const userRef = ref(database, `infoUsuarios/${sanitizedEmail}`);
      console.log('Saving data to ref:', `infoUsuarios/${sanitizedEmail}`);
      set(userRef, {
        name,
        phone,
        address,
        city,
        state
      }).then(() => {
        console.log('Datos guardados exitosamente');
        navigate("/"); // Recargar la página después de guardar
      }).catch((error) => {
        console.error('Error al guardar los datos:', error);
      });
    } else {
      console.error('Sanitized email is null or undefined');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${icono})` }}>
      <div className="profile-container">
        <h1>Mi Perfil</h1>
        {isEditing ? (
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
          </form>
        ) : (
          <div className="profile-details">
            <p><strong>Nombre y Apellido:</strong> {name}</p>
            <p><strong>Teléfono:</strong> {phone}</p>
            <p><strong>Dirección:</strong> {address}</p>
            <p><strong>Ciudad:</strong> {city}</p>
            <p><strong>Estado:</strong> {state}</p>
            <button 
              className="edit-button" 
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
          </div>
        )}
        <button 
          type="button" 
          className="btn btn-primary pt-3 logout-button" 
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
          