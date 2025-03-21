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
        return database[this.model].findOne({ where: { id: Number(id) } });
    }

    async create(data) {
        return database[this.model].create(data);
    }

    async update(data, id) {
        const updatedData = database[this.model].update(data, { where: { id: Number(id) } });

        if (updatedData[0] === 0) return false;

        return true;
    }

    async delete(id) {
        const deletedData = database[this.model].destroy({ where: { id: Number(id) } });

        if (!deletedData) return false;

        return true;
    }
}

module.exports = Services;
