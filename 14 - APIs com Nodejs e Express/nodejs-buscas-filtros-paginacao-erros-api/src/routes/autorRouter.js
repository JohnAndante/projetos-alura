import express from "express";
import AutorController from "../controllers/autorController.js";
import paginacao from "../middlewares/paginacao.js";
import ordenacao from "../middlewares/ordenacao.js";

const router = express.Router();

router.get("/", paginacao, ordenacao, AutorController.listarAutores);

router.get("/:id", AutorController.buscarAutor);

router.post("/", AutorController.criarAutor);

router.put("/:id", AutorController.atualizarAutor);

router.delete("/:id", AutorController.deletarAutor);

export default router;
