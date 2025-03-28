import express from "express";
import livrosRouter from "./livroRouter.js";
import autoresRouter from "./autorRouter.js";
import NotFoundError from "../errors/NotFoundError.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "API de Livros" });
});

router.use("/livros", livrosRouter);
router.use("/autores", autoresRouter);

router.use("*", NotFoundError);

export default router;
