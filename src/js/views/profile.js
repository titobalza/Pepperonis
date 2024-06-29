// Profile.js
import React, { useState } from 'react';
import './profile.css';
import icono from "../../img/fondo.png";


const Profile = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos del formulario
    console.log({ email, name, password, location, position });
  };

  return (
    <div style={{backgroundImage: `url(${icono})`,}}>
    <div className="profile-container">
      <h1>Mi Perfil</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Ubicación</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="position">Encargo</label>
          <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <button type="submit" className="save-button">Guardar Cambios</button>
      </form>
    </div>
    </div>
  );
};

export default Profile;