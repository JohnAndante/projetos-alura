const Controller = require('./Controller');
const CursoServices = require('../services/CursoServices');
const { Op } = require('sequelize');

const cursoServices = new CursoServices();

class CursoController extends Controller {
    constructor() {
        super(cursoServices);
    }

    async getCourses(req, res) {
        const { data_inicial, data_final } = req.query;
        const where = {};

        data_inicial || data_final ? where.data_inicio = {} : null;
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;

        try {
            const dataList = await cursoServices.getAll(where);
            return res.status(200).json({ data: dataList, metadata: { total: dataList.length } });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CursoController;
