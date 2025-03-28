const database = require('../database/models');

class Services {
    constructor(model) {
        this.model = model;
    }

    async getAll(where = {}) {
        return database[this.model].findAll({ where: { ...where } });
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

    async getAndCountAll(options) {
        return database[this.model].findAndCountAll({ ...options });
    }

    async create(data) {
        return database[this.model].create(data);
    }

    async update(data, where, transaction = {}) {
        const updatedData = database[this.model].update(data, { where: { ...where }, transaction });

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
