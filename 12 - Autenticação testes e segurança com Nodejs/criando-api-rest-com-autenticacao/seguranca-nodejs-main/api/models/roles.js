'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class roles extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            roles.belongsToMany(models.usuario, {
                through: models.usuarios_roles,
                as: 'roles_usuario',
                foreignKey: 'role_id'
            });

            roles.belongsToMany(models.permissoes, {
                through: models.roles_permissoes,
                as: 'roles_permissoes',
                foreignKey: 'role_id',
            });
        }
    }

    roles.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'roles',
    });

    return roles;
};
