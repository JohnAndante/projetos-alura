import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "O título do livro é obrigatório"] },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O autor do livro é obrigatório"] },
    editora: { type: String, required: [true, "A editora do livro é obrigatória"] },
    valor: { type: mongoose.Schema.Types.Int32, required: [true, "O valor do livro é obrigatório"] },
    paginas: { type: mongoose.Schema.Types.Int32, required: [true, "O número de páginas do livro é obrigatório"] },
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;

