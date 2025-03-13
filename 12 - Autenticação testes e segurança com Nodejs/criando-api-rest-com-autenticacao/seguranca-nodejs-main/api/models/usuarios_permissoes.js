'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class usuarios_permissoes extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) { }
    }

    usuarios_permissoes.init({
        usuario_id: DataTypes.UUID,
        permissao_id: DataTypes.UUID
    }, {
        sequelize,
        modelName: 'usuarios_permissoes',
    });

    return usuarios_permissoes;
};
