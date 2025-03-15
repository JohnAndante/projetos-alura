import express from "express";
import livrosRouter from "./livros.js";

const router = express.Router();

router.use("/livros", livrosRouter);

export default router;
