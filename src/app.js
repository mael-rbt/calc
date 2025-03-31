const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// Servir la page statique
app.use(express.static(path.join(__dirname, 'public')));

// Pour tester si le serveur tourne
app.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = app;
