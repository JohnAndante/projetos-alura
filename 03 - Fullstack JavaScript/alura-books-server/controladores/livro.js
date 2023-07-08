const { getTodosLivros } = require("../servicos/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

module.exports = {
  getLivros,
};
