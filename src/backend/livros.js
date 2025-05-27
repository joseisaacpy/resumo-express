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
    capaURL:
      "https://m.media-amazon.com/images/I/51pMDud4+aL._SY445_SX342_PQ69_.jpg",
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
    capaURL:
      "https://m.media-amazon.com/images/I/41FU42ESk5L._SY445_SX342_PQ69_.jpg",
    nome: "Sapiens: Uma Breve História da Humanidade",
    descricao: "A evolução da espécie humana.",
    dataPubli: "2011-01-01",
    nomeAutor: "Yuval Noah Harari",
    resumo:
      "Um relato da história da humanidade, desde o surgimento do Homo sapiens até os dias atuais.",
    categoria: "História",
    avaliacoes: 4.8,
  },
  {
    id: 4,
    capaURL:
      "https://m.media-amazon.com/images/I/41suUFbw-eL._SY445_SX342_PQ69_.jpg",
    nome: "Mindset: A Nova Psicologia do Sucesso",
    descricao: "Como nossa mentalidade afeta o sucesso.",
    dataPubli: "2006-02-28",
    nomeAutor: "Carol S. Dweck",
    resumo:
      "Explora como a mentalidade fixa e de crescimento afetam nosso desenvolvimento pessoal e profissional.",
    categoria: "Psicologia",
    avaliacoes: 4.6,
  },
  {
    id: 5,
    capaURL:
      "https://m.media-amazon.com/images/I/415341EcBhL._SY445_SX342_PQ69_.jpg",
    nome: "O Andar do Bêbado",
    descricao: "Como o acaso influencia nossas vidas.",
    dataPubli: "2008-05-01",
    nomeAutor: "Leonard Mlodinow",
    resumo:
      "Uma análise divertida e profunda sobre como o acaso e a probabilidade afetam tudo o que fazemos.",
    categoria: "Ciência",
    avaliacoes: 4.4,
  },
  {
    id: 6,
    capaURL:
      "https://m.media-amazon.com/images/I/41-xN92FD7L._SY445_SX342_PQ69_.jpg",
    nome: "Essencialismo",
    descricao: "A disciplinada busca por menos.",
    dataPubli: "2014-04-15",
    nomeAutor: "Greg McKeown",
    resumo:
      "Aprenda a eliminar o que é supérfluo e focar no que realmente importa para alcançar mais com menos esforço.",
    categoria: "Produtividade",
    avaliacoes: 4.7,
  },
];

module.exports = livros; // Exportação do array de livros
