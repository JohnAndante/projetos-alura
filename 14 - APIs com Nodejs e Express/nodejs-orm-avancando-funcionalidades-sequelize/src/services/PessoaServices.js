const dataSource = require('../database/models');
const Services = require('./Services');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
        this.matriculaServices = new Services('Matricula');
    }

    async getAllRegistrations(studentId) {
        const student = await super.getById(studentId);
        const registrationsList = await student.getTodasAsMatriculas();

        return registrationsList;
    }

    async getActiveRegistrations(studentId) {
        const student = await super.getById(studentId);
        const registrationsList = await student.getAulasMatriculadas();

        return registrationsList;
    }

    async getAllPessoas() {
        return super.getByScope('todos');
    }

    async cancelStudentRegistration(studentId) {
        return dataSource.sequelize.transaction(async transaction => {
            await super.update({ ativo: false }, { id: studentId }, transaction);
            await this.matriculaServices.update({ status: 'cancelado' }, { estudante_id: studentId }, transaction);
        });
    }
}

module.exports = PessoaServices;
