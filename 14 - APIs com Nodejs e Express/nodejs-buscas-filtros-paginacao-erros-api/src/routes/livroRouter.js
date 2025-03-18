import express from "express";
import LivroController from "../controllers/livroController.js";
import paginacao from "../middlewares/paginacao.js";
import ordenacao from "../middlewares/ordenacao.js";

const router = express.Router();

router.get("/", paginacao, ordenacao, LivroController.listarLivros);

router.get("/:id", paginacao, ordenacao, LivroController.buscarLivro);

router.post("/", LivroController.criarLivro);

router.put("/:id", LivroController.atualizarLivro);

router.delete("/:id", LivroController.deletarLivro);

router.get("/filtro", LivroController.listarLivrosPorFiltro);


export default router;
