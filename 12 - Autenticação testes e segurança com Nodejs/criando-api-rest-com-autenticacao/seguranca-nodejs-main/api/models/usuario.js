'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class usuario extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            usuario.belongsToMany(models.roles, {
                through: models.usuarios_roles,
                as: 'usuarios_roles',
                foreignKey: 'usuario_id'
            });

            usuario.belongsToMany(models.permissoes, {
                through: models.usuarios_permissoes,
                as: 'usuarios_permissoes',
                foreignKey: 'usuario_id',
            });
        }
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
