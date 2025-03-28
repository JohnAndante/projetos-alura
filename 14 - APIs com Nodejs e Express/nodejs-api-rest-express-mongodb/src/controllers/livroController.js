import livroModel from '../models/Livro.js'
import { autor as autorModel } from '../models/Autor.js';

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livroModel.find({});

            res.status(200).json({
                data: listaLivros,
                metadata: {
                    total: listaLivros.length,
                },
            });
        } catch (error) {
            console.error('Erro ao listar livros', error);
            res.status(500).json({ error: 'Erro ao listar livros' });
        }
    }

    static async buscarLivro(req, res) {
        try {
            const { id } = req.params;

            const livro = await livroModel.findById(id);

            if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });

            res.status(200).json({ data: livro });
        } catch (error) {
            console.error('Erro ao buscar livro', error);
            res.status(500).json({ error: 'Erro ao buscar livro' });
        }
    }

    static async listarLivrosPorEditora(req, res) {
        try {
            const editora = req.query.editora;

            const listaLivros = await livroModel.find({ editora });

            res.status(200).json({
                data: listaLivros,
                metadata: {
                    total: listaLivros.length,
                },
            });
        } catch (error) {
            console.error('Erro ao listar livros por editora', error);
            res.status(500).json({ error: 'Erro ao listar livros por editora' });
        }
    }

    static async criarLivro(req, res) {
        try {
            const { titulo, editora, valor, paginas, autorId } = req.body;

            const autor = await autorModel.findById(autorId);

            if (!autor) return res.status(404).json({ error: 'Autor informado não encontrado' });

            const novoLivro = new livroModel({
                titulo,
                editora,
                valor,
                paginas,
                autor: { ...autor._doc },
            });

            await novoLivro.save();

            res.status(201).json({ message: 'Livro criado com sucesso', data: novoLivro });
        } catch (error) {
            console.error('Erro ao criar livro', error);
            res.status(500).json({ error: 'Erro ao criar livro' });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const { id } = req.params;
            const { titulo, editora, valor, paginas, autorId } = req.body;

            let autor = null;

            if (autorId) {
                autor = await autorModel.findById(autorId);

                if (!autor) return res.status(404).json({ error: 'Autor informado não encontrado' });
            }

            await livroModel.findByIdAndUpdate(id, {
                titulo,
                editora,
                valor,
                paginas,
                autor: autor ? { ...autor._doc } : null,
            });

            res.status(200).json({ message: 'Livro atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar livro', error);
            res.status(500).json({ error: 'Erro ao atualizar livro' });
        }
    }

    static async deletarLivro(req, res) {
        try {
            const { id } = req.params;

            await livroModel.findByIdAndDelete(id);

            res.status(200).json({ message: 'Livro deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar livro', error);
            res.status(500).json({ error: 'Erro ao deletar livro' });
        }
    }
}

export default LivroController;
