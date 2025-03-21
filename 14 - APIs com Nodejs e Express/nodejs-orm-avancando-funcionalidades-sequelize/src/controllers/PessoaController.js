const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }

    async getAllRegistrations(req, res) {
        try {
            const { estudante_id } = req.params;
            const registrationsList = await pessoaServices.getAllRegistrations(Number(estudante_id), false);

            return res.status(200).json({ data: registrationsList, metadata: { total: registrationsList.length } });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getActiveRegistrations(req, res) {
        try {
            const { estudante_id } = req.params;
            const registrationsList = await pessoaServices.getActiveRegistrations(Number(estudante_id));

            return res.status(200).json({ data: registrationsList, metadata: { total: registrationsList.length } });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const pessoas = await pessoaServices.getAllPessoas();

            return res.status(200).json({ data: pessoas, metadata: { total: pessoas.length } });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PessoaController;
