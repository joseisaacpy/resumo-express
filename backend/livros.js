// API de livros

const livros = [
  {
    id: 1,
    capaURL:
      "https://m.media-amazon.com/images/I/51Pw06uU8FL._SY445_SX342_PQ69_.jpg",
    nome: "O Poder do Hábito",
    descricao: "Como hábitos moldam nosso comportamento.",
    dataPubli: "2012-02-28",
    nomeAutor: "Charles Duhigg",
    resumo:
      "Este livro mostra como hábitos funcionam no cérebro e como podemos mudá-los para melhorar nossa vida.",
    categoria: "Desenvolvimento Pessoal",
    avaliacoes: 4.5,
  },
  {
    id: 2,
    capaURL: "https://m.media-amazon.com/images/I/51pMDud4+aL._SY445_SX342_PQ69_.jpg",
    nome: "Algoritmos para Viver",
    descricao: "A ciência da computação aplicada à vida cotidiana.",
    dataPubli: "2016-04-19",
    nomeAutor: "Brian Christian",
    resumo:
      "Este livro explora como os algoritmos de computação podem nos ajudar a tomar melhores decisões na vida.",
    categoria: "Ciência",
    avaliacoes: 4.3,
  },
  {
    id: 3,
    capaURL: "https://m.media-amazon.com/images/I/41FU42ESk5L._SY445_SX342_PQ69_.jpg",
    nome: "Sapiens: Uma Breve História da Humanidade",
    descricao: "A evolução da espécie humana.",
    dataPubli: "2011-01-01",
    nomeAutor: "Yuval Noah Harari",
    resumo:
      "Um relato da história da humanidade, desde o surgimento do Homo sapiens até os dias atuais.",
    categoria: "História",
    avaliacoes: 4.8,
  },
];

module.exports = livros; // Exportação do array de livros
