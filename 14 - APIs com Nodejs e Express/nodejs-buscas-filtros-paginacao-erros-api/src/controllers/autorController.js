import { autor as autorModel } from '../models/Autor.js';
import ValidationError from '../errors/ValidationError.js';

class AutorController {
    static async listarAutores(req, res, next) {
        try {
            const listaAutores = await autorModel.find({});

            res.status(200).json({
                data: listaAutores,
                metadata: {
                    total: listaAutores.length,
                },
            });
        } catch (error) {
            next(error);
        }
    }

    static async buscarAutor(req, res, next) {
        try {
            const { id } = req.params;

            if (!id.match(/^[0-9a-fA-F]{24}$/)) return new ValidationError('ID inválido', 400).sendResponse(res);

            const autor = await autorModel.findById(id);

            if (!autor) return new NotFoundError('Autor não encontrado').sendResponse(res);

            res.status(200).json({ data: autor });
        } catch (error) {
            next(error);
        }
    }

    static async criarAutor(req, res, next) {
        try {
            const { nome, nacionalidade } = req.body;

            const novoAutor = new autorModel({
                nome,
                nacionalidade,
            });

            await novoAutor.save();

            res.status(201).json({ message: 'Autor criado com sucesso', data: novoAutor });
        } catch (error) {
            next(error);
        }
    }

    static async atualizarAutor(req, res, error) {
        try {
            const { id } = req.params;

            if (!id.match(/^[0-9a-fA-F]{24}$/)) return new ValidationError('ID inválido', 400).sendResponse(res);

            const { nome, nacionalidade } = req.body;

            const autor = await autorModel.findByIdAndUpdate(id, {
                nome,
                nacionalidade,
            });

            if (!autor) return new NotFoundError('Autor não encontrado').sendResponse(res);

            res.status(200).json({ message: 'Autor atualizado com sucesso' });
        } catch (error) {
            next(error);
        }
    }

    static async deletarAutor(req, res, next) {
        try {
            const { id } = req.params;

            if (!id.match(/^[0-9a-fA-F]{24}$/)) return new ValidationError('ID inválido', 400).sendResponse(res);

            const autor = await autorModel.findByIdAndDelete(id);

            if (!autor) return new NotFoundError('Autor não encontrado').sendResponse(res);

            res.status(200).json({ message: 'Autor deletado com sucesso' });
        } catch (error) {
            next(error);
        }
    }
}

export default AutorController;
