import express from "express";
import livro from "../models/livro.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const listaLivros = await livro.find();
    res.status(200).json({ data: listaLivros, metadata: { total: listaLivros.length } });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const livro = livros.find((livro) => livro.id === Number(id));

    if (!livro) {
        return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.status(200).json({ data: livro });
});

router.post("/", (req, res) => {
    const { id, nome } = req.body;
    const livro = { id, nome };

    livros.push(livro);

    res.status(201).json({ data: livro });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const livro = livros.find((livro) => livro.id === Number(id));

    if (!livro) {
        return res.status(404).json({ error: "Livro não encontrado" });
    }

    livro.nome = nome;

    livros[livros.indexOf(livro)] = { ...livro };

    res.status(200).json({ message: "Livro atualizado com sucesso", data: livro });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = livros.findIndex((livro) => livro.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Livro não encontrado" });
    }

    livros.splice(index, 1);

    res.status(204).end();
});

export default router;
