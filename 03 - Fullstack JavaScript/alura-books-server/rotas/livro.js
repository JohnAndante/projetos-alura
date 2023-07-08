const { Router } = require("express");
const { getLivros } = require("../controladores/livro");

const router = Router();

router.get("/", getLivros);

router.post("/", (req, res) => {
  res.send("POST request! Hello World! 🌎");
});

router.patch("/", (req, res) => {
  res.send("PATCH request! Hello World! 🌎");
});

router.delete("/", (req, res) => {
  res.send("DELETE request! Hello World! 🌎");
});

module.exports = router;
