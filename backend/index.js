const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Puedes cambiar el puerto si lo deseas

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

let feedbacks = [];

// Ruta para obtener todos los feedbacks
app.get('/feedback', (req, res) => {
  res.json(feedbacks);
});

// Ruta para crear un nuevo feedback
app.post('/feedback', (req, res) => {
  const { feedback, email } = req.body;

  if (feedback && email) {
    feedbacks.push({ feedback, email });
    res.status(201).json({ message: 'Feedback recibido' });
  } else {
    res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});