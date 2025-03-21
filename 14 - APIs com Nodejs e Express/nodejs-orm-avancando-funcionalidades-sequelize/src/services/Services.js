const database = require('../database/models');

class Services {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return database[this.model].findAll();
    }

    async getByScope(scope) {
        return database[this.model].scope(scope).findAll();
    }

    async getById(id) {
        return database[this.model].findByPk(id);
    }

    async getOne(where) {
        return database[this.model].findOne({ where: { ...where } });
    }

    async create(data) {
        return database[this.model].create(data);
    }

    async update(data, where) {
        const updatedData = database[this.model].update(data, { where: { ...where } });

        if (updatedData[0] === 0) return false;

        return true;
    }

    async delete(where) {
        const deletedData = database[this.model].destroy({ where: { ...where } });

        if (!deletedData) return false;

        return true;
    }
}

module.exports = Services;
