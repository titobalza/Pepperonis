// Profile.js
import React, { useState } from 'react';
import './Profile.css';
import icono from "../../img/fondo.png";


const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos del formulario
    console.log({ 
      firstName, 
      lastName, 
      phone, 
      email, 
      address, 
      city, 
      state, 
      password 
    });
  };

  return (
    <div style={{backgroundImage:`url(${icono})`,}}>
    <div className="profile-container">
      <h1>Mi Perfil</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="firstName">Nombre</label>
          <input 
            type="text" 
            id="firstName" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido</label>
          <input 
            type="text" 
            id="lastName" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
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
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="save-button">Guardar Cambios</button>
      </form>
    </div>
    </div>
  );
};

export default Profile;