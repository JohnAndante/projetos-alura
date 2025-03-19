const Controller = require('./Controller');
const MatriculaServices = require('../services/MatriculaServices');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
    constructor() {
        super(matriculaServices);
    }
}

module.exports = MatriculaController;
