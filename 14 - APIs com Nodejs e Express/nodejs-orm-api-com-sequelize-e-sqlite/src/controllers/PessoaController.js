const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }
}

module.exports = PessoaController;
