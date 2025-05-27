const path = require("path"); // Importação do path para manipulação de caminhos de arquivos
const express = require("express"); // Importação do express
const app = express(); // Coloca as funcionalidades do express numa variável
const routes = express.Router(); // Importa as rotas do express
const port = 3000; // Define a porta do servidor
const livros = require("./livros");
const frontendPath = path.join(__dirname, "../frontend"); // Define o caminho da pasta frontend

const cors = require("cors"); // Importação do cors para request
app.use(cors()); // Usa o cors

// rota padrão
app.use("/", express.static(frontendPath)); // Define a pasta frontend como estática, para que o express sirva os arquivos estáticos

// rota dos livros
app.get("/livros", (req, res) => {
  res.status(200).json(livros); // Retorna status ok e API de livros
});

// rota para cada livro
app.get("/livros/:id", (req, res) => {
  const idLivro = parseInt(req.params.id); // Pega o ID da URL

  // Procura o ID do livro na URL na API
  const livroEncontrado = livros.find((l) => {
    return l.id === idLivro; // Retorna o livro com o mesmo id do livro na URL
  });

  // Se não encotrar o livro, retorna uma mensagem
  if (!livroEncontrado) {
    return res.status(401).json({ message: "Livro não encontrado." });
  } else {
    res.status(200).json(livroEncontrado); // Retorna status ok e o livro em json
  }
});

// Inicia o servidor
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor ativo em http://localhost:3000`);
});
