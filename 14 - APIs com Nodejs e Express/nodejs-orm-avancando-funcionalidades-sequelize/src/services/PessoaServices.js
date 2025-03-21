const Services = require('./Services');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
    }

    async getRegistrations(studentId) {
        const student = await super.getById(studentId);
        const registrationsList = await student.getAulasMatriculadas();

        return registrationsList;
    }

    async getAllPessoas() {
        return super.getByScope('todos');
    }
}

module.exports = PessoaServices;
