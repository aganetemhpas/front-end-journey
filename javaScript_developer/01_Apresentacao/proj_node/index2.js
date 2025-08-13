const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

// Rota para a página HOME (/)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/home.html')); 
});

// Rota para a página CONTATO (/contato)
router.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/contato.html'));
});

app.use(router);

app.listen(port.env.PORT || 3333, () => {
  console.log('Servidor rodando na porta 3333');
});