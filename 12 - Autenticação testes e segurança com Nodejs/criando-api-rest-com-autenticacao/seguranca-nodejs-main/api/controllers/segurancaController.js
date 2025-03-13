const SegurancaService = require('../services/segurancaService');
const segurancaService = new SegurancaService();

class SegurancaController {
    static async cadastrarAcl(req, res) {
        const { roles, permissoes } = req.body;
        const { id } = req.usuario;

        try {
            const acl = await segurancaService.cadastrarAcl({ roles, permissoes, id });

            res.status(201).json(acl);
        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }

    }

    static async cadastrarPermissoesRoles(req, res) {
        const { roleId, permissoes } = req.body;

        try {
            const permissoesRoles = await segurancaService.cadastrarPermissoesRole({ roleId, permissoes });

            res.status(201).json(permissoesRoles);
        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = SegurancaController;
