const express = require('express');
const path = require('path');
const { add, subtract, multiply, getHistory, clearHistory } = require('./calculator');

const app = express();
app.use(express.json());

// Servir la page statique
app.use(express.static(path.join(__dirname, 'public')));

app.post('/calculate', (req, res) => {
    const { a, b, operation } = req.body;
    let result;
    switch (operation) {
      case 'add':
        result = add(Number(a), Number(b));
        break;
      case 'subtract':
        result = subtract(Number(a), Number(b));
        break;
      case 'multiply':
        result = multiply(Number(a), Number(b));
        break;
      default:
        return res.status(400).json({ error: 'Invalid operation' });
    }
    return res.json({ result });
});

// GET /history => renvoie l'historique
app.get('/history', (req, res) => {
  const history = getHistory();
  return res.json({ history });
});

// DELETE /history => vide l'historique
app.delete('/history', (req, res) => {
    clearHistory();
    res.status(204).send();
});

// Pour tester si le serveur tourne
app.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = app;