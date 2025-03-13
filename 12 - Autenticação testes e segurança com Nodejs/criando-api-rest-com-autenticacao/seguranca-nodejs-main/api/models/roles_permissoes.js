'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class roles_permissoes extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) { }
    }

    roles_permissoes.init({
        role_id: DataTypes.UUID,
        permissao_id: DataTypes.UUID
    }, {
        sequelize,
        modelName: 'roles_permissoes',
    });

    return roles_permissoes;
};
