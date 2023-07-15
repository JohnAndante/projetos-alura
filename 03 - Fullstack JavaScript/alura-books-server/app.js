const express = require("express");
const rotaLivros = require("./rotas/livro");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*" }));

const port = 8000;

app.use("/livros", rotaLivros);

app.listen(port, () => {
  console.log(`🚀 Server iniciado em http://localhost:${port}/`);
});
