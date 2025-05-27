# 📚 Projeto Livros - API + Frontend Puro

Este é um projeto full stack simples feito com **Node.js**, **Express**, **HTML**, **CSS** e **JavaScript puro**. A aplicação simula uma livraria digital que consome dados de uma API local para exibir livros na tela.

## 🔧 Tecnologias usadas

- **Backend:** Node.js + Express
- **Frontend:** HTML5, CSS3, JavaScript Vanilla
- **Hospedagem local:** `localhost:3000`

## 📁 Estrutura de Pastas

```
/backend
├── app.js # Servidor Express
└── livros.js # "Banco de dados" com os livros

/frontend
├── index.html
├── index.js # Faz fetch dos livros e renderiza
└── styles/ # CSS (global, reset, etc.)

/public # Pasta pública (não usada ainda)

.gitignore
package.json
package-lock.json
```

## 🚀 Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicialize o servidor:**

```bash
node backend/app.js
```

3. **Abra o localhost:3000**

- O servidor vai rodar em http://localhost:3000

## 📡 Rotas da API

- GET /livros → Retorna todos os livros

- GET /livros/:id → Retorna um livro específico por ID

- GET / → Retorna a página HTML estática com todas as capas dos livros
