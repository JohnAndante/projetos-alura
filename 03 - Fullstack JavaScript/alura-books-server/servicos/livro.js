const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];

  return livroFiltrado;
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const novaListaDeLivros = [...livros, livroNovo];

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function alteraLivro(alteracoes, id) {
  let livros = JSON.parse(fs.readFileSync("livros.json"));
  const index = livros.findIndex((livro) => livro.id === id);
  const dadosAlterados = { ...livros[index], ...alteracoes };
  livros[index] = dadosAlterados;

  fs.writeFileSync("livros.json", JSON.stringify(livros));
}

function deletaLivro(id) {
  let livros = JSON.parse(fs.readFileSync("livros.json"));
  // const index = livros.findIndex((livro) => livro.id === id);
  // livros.splice(index, 1);
  // fs.writeFileSync("livros.json", JSON.stringify(livros));

  const livrosFiltrados = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}
module.exports = {
  getTodosLivros,
  getLivroId,
  insereLivro,
  alteraLivro,
  deletaLivro,
};
