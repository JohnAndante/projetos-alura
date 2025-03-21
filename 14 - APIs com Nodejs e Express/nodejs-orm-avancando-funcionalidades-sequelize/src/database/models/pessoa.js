'use strict';
const { Model } = require('sequelize');
const isValidCpf = require('../../utils/cpfValidatorHelper');

module.exports = (sequelize, DataTypes) => {
    class Pessoa extends Model {
        static associate(models) {
            Pessoa.hasMany(models.Curso, {
                foreignKey: 'docente_id'
            });
            Pessoa.hasMany(models.Matricula, {
                foreignKey: 'estudante_id',
                scope: {
                    status: 'matriculado',
                },
                as: 'aulasMatriculadas',
            });
        }
    }
    Pessoa.init({
        nome: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 255],
                    msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Email inválido',
                },
            },
        },
        cpf: {
            type: DataTypes.STRING,
            validate: {
                isCpf: (value) => {
                    if (!isValidCpf(value)) {
                        throw new Error('CPF inválido');
                    }
                },
            },
        },
        ativo: DataTypes.BOOLEAN,
        role: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Pessoa',
        tableName: 'pessoas',
        paranoid: true,
        defaultScope: {
            where: {
                ativo: true,
            },
        },
        scopes: {
            todos: {
                where: {}
            },
            docentes: {
                where: {
                    role: 'docente',
                },
            },
            estudantes: {
                where: {
                    role: 'estudante',
                },
            },
        },
    });
    return Pessoa;
};
