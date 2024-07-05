import React, { useState, useEffect } from 'react';
import { ref, push, get, set } from 'firebase/database';
import { database } from '../configSignIn/firebase';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [isNameLoaded, setIsNameLoaded] = useState(false);

  const email = sessionStorage.getItem('email');
  const sanitizedEmail = email ? email.replace(/[^\w\s]/gi, '') : null;

  console.log('Email from sessionStorage:', email);
  console.log('Sanitized Email:', sanitizedEmail);

  useEffect(() => {
    if (sanitizedEmail) {
      const userRef = ref(database, `infoUsuarios/${sanitizedEmail}`);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserName(data.name || '');
        }
        setIsNameLoaded(true);
      }).catch((error) => {
        console.error('Error al obtener los datos del usuario:', error);
        setIsNameLoaded(true);
      });
    } else {
      setIsNameLoaded(true);
    }
  }, [sanitizedEmail]);

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (feedback === "") {
      alert("El campo de feedback es obligatorio.");
    } else if (sanitizedEmail) {
      try {
        const feedbackRef = ref(database, 'Feedback');
        const newFeedbackRef = push(feedbackRef); // Utilizamos push para generar una nueva referencia única

        await set(newFeedbackRef, {
          text: feedback,
          name: userName,
          date: new Date().toISOString()
        });

        setFeedback("");
        setMessage("¡Feedback enviado con éxito!");
      } catch (error) {
        console.error('Error al enviar el feedback:', error);
        setMessage("Error al enviar el feedback.");
      }
    } else {
      console.error('Sanitized email is null or undefined');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px", margin: "0 auto" }}>
      <h3>Deja tu feedback</h3>
      {!isNameLoaded ? (
        <p>Cargando datos...</p>
      ) : (
        <>
          <textarea
            name="feedback"
            value={feedback}
            onChange={handleInputChange}
            placeholder="Redacta un feedback..."
            required
            style={{ height: "100px", padding: "10px", resize: "vertical" }}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>Enviar</button>
          {message && <p className="text-success">{message}</p>}
        </>
      )}
    </form>
  );
};

export default FeedbackForm;