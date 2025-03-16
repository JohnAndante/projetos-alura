import express from "express";
import livrosRouter from "./livroRouter.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "API de Livros" });
});

router.use("/livros", livrosRouter);

export default router;
