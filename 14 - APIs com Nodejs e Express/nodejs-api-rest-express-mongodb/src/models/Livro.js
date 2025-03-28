import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String },
    editora: { type: String },
    valor: { type: mongoose.Schema.Types.Int32 },
    paginas: { type: mongoose.Schema.Types.Int32 },
    autor: autorSchema,
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;

