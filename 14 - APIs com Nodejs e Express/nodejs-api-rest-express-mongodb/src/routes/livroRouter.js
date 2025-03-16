import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router.get("/", LivroController.listarLivros);

router.get("/:id", LivroController.buscarLivro);

router.post("/", LivroController.criarLivro);

router.put("/:id", LivroController.atualizarLivro);

router.delete("/:id", LivroController.deletarLivro);

export default router;
