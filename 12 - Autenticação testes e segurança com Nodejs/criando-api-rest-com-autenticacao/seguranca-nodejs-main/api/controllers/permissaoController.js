const PermissaoService = require('../services/permissaoService.js');
const permissaoService = new PermissaoService();

class PermissaoController {
    static async cadastrarPermissao(req, res) {
        const { nome, descricao } = req.body;

        try {
            const permissao = await permissaoService.cadastrarPermissao({ nome, descricao });

            res.status(201).json(permissao);

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }

    static async buscarTodasPermissoes(req, res) {
        const permissoes = await permissaoService.buscarTodasPermissoes();

        res.status(200).json(permissoes);
    }

    static async buscarPermissaoPorId(req, res) {
        try {
            const { id } = req.params;
            const permissao = await permissaoService.buscarPermissaoPorId(id);

            res.status(200).json(permissao);
        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }

    static async deletarPermissaoPorId(req, res) {
        const { id } = req.params;

        try {
            await permissaoService.deletarPermissaoPorId(id);

            res.status(200).send({ message: 'Permissão deletada com sucesso!' });

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }

    static async editarPermissao(req, res) {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        try {
            const permissao = await permissaoService.editarPermissao({ id, nome, descricao });

            res.status(200).json(permissao);
        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = PermissaoController;
