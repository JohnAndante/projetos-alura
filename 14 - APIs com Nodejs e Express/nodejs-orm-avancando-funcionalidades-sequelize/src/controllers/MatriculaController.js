const Sequelize = require('sequelize');
const Controller = require('./Controller');
const MatriculaServices = require('../services/MatriculaServices');
const strincConversor = require('../utils/stringConversorHelper');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
    constructor() {
        super(matriculaServices);
    }

    async getRegistrationsByStudentId(req, res) {
        try {
            const where = strincConversor(req.params);
            const { count, rows } = await matriculaServices.getAndCountAll({
                where: {
                    estudante_id: where.estudante_id,
                    status: 'matriculado',
                },
                limit: 10,
                order: [['created_at', 'ASC']],
            });

            if (!rows || !rows.length) {
                return res.status(404).json({ message: `Register with ${JSON.stringify(where)} not found` });
            }

            return res.status(200).json({ data: rows, total: count });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getFullCourses(req, res) {
        try {
            const courseAllotment = 30; // Apenas para exemplo

            const { count } = await matriculaServices.getAndCountAll({
                where: {
                    status: 'matriculado',
                },
                attributes: ['curso_id'],
                group: ['curso_id'],
                having: Sequelize.literal(`COUNT(curso_id) >= ${courseAllotment}`),
            });

            return res.status(200).json({ count });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = MatriculaController;
