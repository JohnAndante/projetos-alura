const { v4: uuidv4 } = require('uuid');

const database = require('../database');

class RoleService {
    async cadastrarRole(dto) {
        const role = await database.roles.findOne({
            where: {
                nome: dto.nome,
            }
        });

        if (role) {
            throw new Error('Role já cadastrada');
        }

        try {
            const newRole = await database.roles.create({
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao,
            });

            return newRole;
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }

    async buscarTodosRoles() {
        const roles = await database.roles.findAll();

        return roles;
    }

    async buscarRolePorId(id) {
        const role = await database.roles.findOne({
            where: {
                id: id
            }
        });

        if (!role) {
            throw new Error('Role informada não cadastrada!');
        }

        return role;
    }

    async deletarRolePorId(id) {
        const role = await database.roles.findOne({
            where: {
                id: id
            }
        });

        if (!role) {
            throw new Error('Role informada não cadastrada!');
        }

        await database.roles.destroy({
            where: {
                id: id
            }
        });

        return role;
    }

    async editarRole(dto) {
        const role = await database.roles.findOne({
            where: {
                id: dto.id
            }
        });

        if (!role) {
            throw new Error('Role informada não cadastrada!');
        }

        try {
            await database.roles.update({
                nome: dto.nome,
                descricao: dto.descricao
            }, {
                where: {
                    id: dto.id
                }
            });

            return await this.buscarRolePorId(dto.id);
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }
}

module.exports = RoleService;
