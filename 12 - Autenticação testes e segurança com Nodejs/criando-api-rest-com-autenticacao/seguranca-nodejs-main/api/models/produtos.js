'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class produtos extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) { }
    }

    produtos.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.FLOAT
    }, { sequelize, modelName: 'produtos' });

    return produtos;
};
