import { autor as autorModel } from '../models/Autor.js';

class AutorController {
    static async listarAutores(req, res) {
        try {
            const listaAutores = await autorModel.find({});

            res.status(200).json({
                data: listaAutores,
                metadata: {
                    total: listaAutores.length,
                },
            });
        } catch (error) {
            console.error('Erro ao listar autores', error);
            res.status(500).json({ error: 'Erro ao listar autores' });
        }
    }

    static async buscarAutor(req, res) {
        try {
            const { id } = req.params;

            const autor = await autorModel.findById(id);

            if (!autor) return res.status(404).json({ error: 'Autor não encontrado' });

            res.status(200).json({ data: autor });
        } catch (error) {
            console.error('Erro ao buscar autor', error);
            res.status(500).json({ error: 'Erro ao buscar autor' });
        }
    }

    static async criarAutor(req, res) {
        try {
            const { nome, nacionalidade } = req.body;

            const novoAutor = new autorModel({
                nome,
                nacionalidade,
            });

            await novoAutor.save();

            res.status(201).json({ message: 'Autor criado com sucesso', data: novoAutor });
        } catch (error) {
            console.error('Erro ao criar autor', error);
            res.status(500).json({ error: 'Erro ao criar autor' });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const { id } = req.params;
            const { nome, nacionalidade } = req.body;

            await autorModel.findByIdAndUpdate(id, {
                nome,
                nacionalidade,
            });

            res.status(200).json({ message: 'Autor atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar autor', error);
            res.status(500).json({ error: 'Erro ao atualizar autor' });
        }
    }

    static async deletarAutor(req, res) {
        try {
            const { id } = req.params;

            await autorModel.findByIdAndDelete(id);

            res.status(200).json({ message: 'Autor deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar autor', error);
            res.status(500).json({ error: 'Erro ao deletar autor' });
        }
    }
}

export default AutorController;
