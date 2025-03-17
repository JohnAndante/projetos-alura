import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    titulo: {
        type: String,
        required: [true, "O título do livro é obrigatório"],
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required: [true, "O autor do livro é obrigatório"],
    },
    editora: {
        type: String,
        required: [true, "A editora do livro é obrigatória"],
    },
    valor: {
        type: mongoose.Schema.Types.Int32,
        required: [true, "O valor do livro é obrigatório"],
        min: [0, "O livro não pode ter valor negativo"],
    },
    paginas: {
        type: mongoose.Schema.Types.Int32,
        validate: {
            validator: value => {
                return value >= 1 && value <= 5000;
            },
            message: "O livro deve ter entre 1 e 5000 páginas. Valor informado: {VALUE}",
        },
    },
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;

