const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }

    async getRegistrations(req, res) {
        try {
            const { estudanteId } = req.params;
            const registrationsList = await pessoaServices.getRegistrations(Number(estudanteId));

            return res.status(200).json({ data: registrationsList, metadata: { total: registrationsList.length } });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PessoaController;
