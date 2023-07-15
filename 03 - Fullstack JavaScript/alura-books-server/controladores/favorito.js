const {
  recuperaTodosFavoritos,
  recuperaFavorito,
  insereFavorito,
  deletaFavoritoId,
} = require("../servicos/favorito");

function getFavoritos(req, res) {
  try {
    const livros = recuperaTodosFavoritos();
    res.send(livros);
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function postFavorito(req, res) {
  try {
    const favoritoNovo = req.params.id;

    if (req.params.id) {
      insereFavorito(favoritoNovo);
      res.status(201);
      res.send("✅ Favorito adicionado com sucesso!");
    } else {
      res.status(422);
      res.send("❌ ID inválido!");
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function deleteFavorito(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletaFavoritoId(id);
      res.status(200);
      res.send("✅ Favorito removido com sucesso!");
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
  getFavoritos,
  postFavorito,
  deleteFavorito,
};
