const database = require('../models');

class SegurancaService {
    async cadastrarAcl(dto) {
        const { roles, permissoes, id } = dto;

        const [
            usuarioCadastrado,
            permissoesCadastradas,
            rolesCadastradas,
        ] = await Promise.all([
            database.usuarios.findOne({
                where: {
                    id: id
                }
            }),
            database.permissoes.findAll({
                where: {
                    nome: {
                        [database.Sequelize.Op.in]: permissoes
                    }
                }
            }),
            database.roles.findAll({
                where: {
                    nome: {
                        [database.Sequelize.Op.in]: roles
                    }
                }
            })
        ]);

        if (!usuarioCadastrado) {
            throw new Error('Usuário informado não cadastrado!');
        }

        if (permissoes.length !== permissoesCadastradas.length) {
            throw new Error('Permissões informadas não cadastradas!');
        }

        if (roles.length !== rolesCadastradas.length) {
            throw new Error('Roles informadas não cadastradas!');
        }

        await usuarioCadastrado.removeUsuario_roles(usuarioCadastrado.usuario_roles);
        await usuarioCadastrado.removeUsuario_permissoes(usuarioCadastrado.usuario_permissoes);

        await usuarioCadastrado.addUsuario_roles(rolesCadastradas);
        await usuarioCadastrado.addUsuario_permissoes(permissoesCadastradas);

        const novoUsuario = await database.usuarios.findOne({
            include: [
                {
                    model: database.roles,
                    as: 'usuario_roles',
                    attributes: ['id', 'nome', 'descricao'],
                },
                {
                    model: database.permissoes,
                    as: 'usuario_permissoes',
                    attributes: ['id', 'nome', 'descricao'],
                },
            ],
        });

        return novoUsuario;
    }

    async cadastrarPermissoesRole(dto) {
        const { roleId, permissoes } = dto;

        const role = await database.roles.findOne({
            include: [
                {
                    model: database.permissoes,
                    as: 'role_permissoes',
                    attributes: ['id', 'nome', 'descricao'],
                },
            ],
        });

        if (!role) {
            throw new Error('Role informada não cadastrada!');
        }

        const permissoesCadastradas = await database.permissoes.findAll({
            where: {
                nome: {
                    [database.Sequelize.Op.in]: permissoes
                }
            }
        });

        if (permissoes.length !== permissoesCadastradas.length) {
            throw new Error('Permissões informadas não cadastradas!');
        }

        await role.removeRole_permissoes(role.role_permissoes);

        await role.addRole_permissoes(permissoesCadastradas);

        const novaRole = await database.roles.findOne({
            include: [
                {
                    model: database.permissoes,
                    as: 'role_permissoes',
                    attributes: ['id', 'nome', 'descricao'],
                },
            ],
            where: {
                id: roleId
            },
        });

        return novaRole;
    }
}

module.exports = SegurancaService;
