import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String },
    editora: { type: String },
    valor: { type: mongoose.Schema.Types.Int32 },
    paginas: { type: mongoose.Schema.Types.Int32 },
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;

