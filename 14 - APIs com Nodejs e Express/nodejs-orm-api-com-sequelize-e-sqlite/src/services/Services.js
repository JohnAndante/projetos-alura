const database = require('../models');

class Services {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        try {
            return database[this.model].findAll();
        } catch (error) {
            return error;
        }
    }

    async getById(id) {
        try {
            return database[this.model].findOne({ where: { id: Number(id) } });
        } catch (error) {
            return error;
        }
    }

    async create(data) {
        try {
            return database[this.model].create(data);
        } catch (error) {
            return error;
        }
    }

    async update(data, id) {
        try {
            const updatedData = database[this.model].update(data, { where: { id: Number(id) } });

            if (updatedData[0] === 0) {
                return false;
            }

            return true;
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            const deletedData = database[this.model].destroy({ where: { id: Number(id) } });

            if (!deletedData) {
                return false;
            }

            return true;
        } catch (error) {
            return error;
        }
    }
}

module.exports = Services;
