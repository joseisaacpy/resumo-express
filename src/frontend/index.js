// elemento de ul
let ulElement = document.getElementById("lista-livros");

// função para buscar livros
async function carregarLivros() {
  try {
    // faz uma requisição para o servidor na rota /livros
    const request = await fetch("http://localhost:3000/livros");

    // retorna o json da requisição
    const data = await request.json();

    // para cada livro no array de livros, cria um item de lista
    data.forEach((livro) => {
      let liElement = document.createElement("li"); // Item de li

      let itemLivro = document.createElement("div"); // Item do livro
      itemLivro.classList.add("item-livro");

      // Conteúdo do item do livro
      itemLivro.innerHTML = `
    <img src="${livro.capaURL || "https://github.com/joseisaacpy.png"}" alt="${
        livro.descricao
      }"/>
    <h3>${livro.nome}</h3>
    `;
      // Li adiciona item do livro
      liElement.appendChild(itemLivro);

      // Ul adiciona a li
      ulElement.appendChild(liElement);
    });
  } catch (error) {
    console.error("Erro ao buscar livros:", error); // Exibe erro no console
  }
}

// Chama a função para buscar livros ao carregar a página
document.addEventListener("DOMContentLoaded", carregarLivros);
