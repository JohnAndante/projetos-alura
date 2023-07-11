const {
  getTodosLivros,
  getLivroId,
  insereLivro,
  alteraLivro,
  deletaLivro,
} = require("../servicos/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("❌ ID inválido!");
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if (req.body.nome) {
      insereLivro(livroNovo);
      res.status(201);
      res.send("✅ Livro inserido com sucesso!");
    } else {
      res.status(422);
      res.send("❌ O campo nome é obrigatório!");
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const body = req.body;
      alteraLivro(body, id);
      res.status(200);
      res.send("✅ Livro alterado com sucesso!");
    } else {
      res.status(422);
      res.send("❌ ID inválido!");
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deletaLivro(id);
      res.status(200);
      res.send("✅ Livro deletado com sucesso!");
    } else {
      res.status(422);
      res.send("❌ ID inválido!");
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
