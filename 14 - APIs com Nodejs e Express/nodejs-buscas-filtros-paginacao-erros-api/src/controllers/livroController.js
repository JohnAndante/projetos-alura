import { AutorModel, LivroModel } from '../models/index.js';
import ValidationError from '../errors/ValidationError.js';
import NotFoundError from '../errors/NotFoundError.js';

class LivroController {
    static async listarLivros(req, res, next) {
        try {
            const listaLivros = await LivroModel.find({});

            res.status(200).json({
                data: listaLivros,
                metadata: {
                    total: listaLivros.length,
                },
            });
        } catch (error) {
            next(error);
        }
    }

    static async buscarLivro(req, res, next) {
        try {
            const { id } = req.params;

            if (!id.match(/^[0-9a-fA-F]{24}$/)) return new ValidationError('ID inválido', 400).sendResponse(res);

            const livro = await LivroModel.findById(id);

            if (!livro) return new NotFoundError('Livro não encontrado').sendResponse(res);

            res.status(200).json({ data: livro });
        } catch (error) {
            next(error);
        }
    }

    static async listarLivrosPorFiltro(req, res, next) {
        try {
            const filtro = processaFiltro(req.query);

            const listaLivros = await LivroModel.find(filtro);

            res.status(200).json({
                data: listaLivros,
                metadata: {
                    total: listaLivros.length,
                },
            });
        } catch (error) {
            next(error);
        }
    }

    async processaFiltro(filtro) {
        const filtroProcessado = {};

        const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = filtro;

        if (editora) filtroProcessado.editora = { $regex: editora, $options: 'i' };
        if (titulo) filtroProcessado.titulo = { $regex: titulo, $options: 'i' };
        if (minPaginas || maxPaginas) {
            filtroProcessado.paginas = {};

            if (minPaginas) filtroProcessado.paginas.$gte = minPaginas;
            if (maxPaginas) filtroProcessado.paginas.$lte = maxPaginas;
        }
        if (nomeAutor) {
            const autor = await AutorModel.findOne({ nome: { $regex: nomeAutor, $options: 'i' } });

            if (autor) filtroProcessado.autor = autor._id;
        }

        return filtroProcessado
    }

    static async criarLivro(req, res, next) {
        try {
            const { titulo, editora, valor, paginas, autorId } = req.body;

            if (!autorId) return new ValidationError('ID do autor é obrigatório', 400).sendResponse

            if (!autorId.match(/^[0-9a-fA-F]{24}$/)) return new ValidationError('ID do autor inválido', 400).sendResponse(res);

            const autor = await AutorModel.findById(autorId);

            if (!autor) return new NotFoundError('Autor informado não encontrado').sendResponse(res);

            const novoLivro = new LivroModel({
                titulo,
                editora,
                valor,
                paginas,
                autor: { ...autor._doc },
            });

            await novoLivro.save();

            res.status(201).json({ message: 'Livro criado com sucesso', data: novoLivro });
        } catch (error) {
            next(error);
        }
    }

    static async atualizarLivro(req, res, next) {
        try {
            const { id } = req.params;

            if (!id.match(/^[0-9a-fA-F]{24}$/)) return new ValidationError('ID inválido', 400).sendResponse(res);

            const { titulo, editora, valor, paginas, autorId } = req.body;

            if (autorId && !autorId.match(/^[0-9a-fA-F]{24}$/)) return new ValidationError('ID do autor inválido', 400).sendResponse(res);

            let autor = null;

            if (autorId) {
                autor = await AutorModel.findById(autorId);

                if (!autor) return new NotFoundError('Autor informado não encontrado').sendResponse(res);
            }

            await LivroModel.findByIdAndUpdate(id, {
                titulo,
                editora,
                valor,
                paginas,
                autor: autor ? { ...autor._doc } : null,
            });

            res.status(200).json({ message: 'Livro atualizado com sucesso' });
        } catch (error) {
            next(error);
        }
    }

    static async deletarLivro(req, res, next) {
        try {
            const { id } = req.params;

            if (!id.match(/^[0-9a-fA-F]{24}$/)) return new ValidationError('ID inválido', 400).sendResponse(res);

            const livro = await LivroModel.findByIdAndDelete(id);

            if (!livro) return new NotFoundError('Livro não encontrado').sendResponse(res);

            res.status(200).json({ message: 'Livro deletado com sucesso' });
        } catch (error) {
            next(error);
        }
    }
}

export default LivroController;
