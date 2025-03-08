'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class usuario extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) { }
    }

    usuario.init({
        id: DataTypes.STRING,
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        role: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'usuario',
        defaultScope: {
            attributes: { exclude: ['senha'] }
        }
    });

    return usuario;
};
