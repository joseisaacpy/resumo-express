const express = require("express"); // Importação do express
const app = express(); // Coloca as funcionalidades do express numa variável
const port = 3000; // Define a porta do servidor
const livros = require("./livros");

// rota padrão
app.get("/", (req, res) => {
  res.status(200).send("<h1>Rota padrão</h1>"); // Retorna status ok e exibe mensagem ao cliente
});

// rota dos livros
app.get("/livros", (req, res) => {
  res.status(200).json(livros); // Retorna status ok e API de livros
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor ativo em http://localhost:3000`);
});
