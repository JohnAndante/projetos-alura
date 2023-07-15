const fs = require("fs");

function recuperaTodosFavoritos() {
  return JSON.parse(fs.readFileSync("favoritos.json"));
}

function insereFavorito(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

  const livroInserido = livros.find((livro) => livro.id === id);
  const novaListaDeLivros = [...favoritos, livroInserido];
  fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivros));
}

function deletaFavoritoId(id) {
  const livros = JSON.parse(fs.readFileSync("favoritos.json"));

  const livrosFiltrados = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
  recuperaTodosFavoritos,
  deletaFavoritoId,
  insereFavorito,
};
