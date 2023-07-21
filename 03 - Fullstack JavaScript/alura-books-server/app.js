const express = require("express");
const cors = require("cors");
const rotaLivros = require("./rotas/livro");
const rotaFavoritos = require("./rotas/favorito");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const port = 8000;

app.use("/livros", rotaLivros);
app.use("/favorito", rotaFavoritos);

app.listen(port, () => {
  console.log(`🚀 Server iniciado em http://localhost:${port}/`);
});
