const { v4: uuidv4 } = require('uuid');
const database = require('../models');

class PermissaoService {
    async cadastrarPermissao(dto) {
        const permissao = await database.permissoes.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (permissao) {
            throw new Error('Permissão já cadastrada');
        }

        try {
            const newPermissao = await database.permissoes.create({
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao,
            });

            return newPermissao;
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }

    async buscarTodasPermissoes() {
        const permissoes = await database.permissoes.findAll();

        return permissoes;
    }

    async buscarPermissaoPorId(id) {
        const permissao = await database.permissoes.findOne({
            where: {
                id: id
            }
        });

        if (!permissao) {
            throw new Error('Permissão informada não cadastrada!');
        }

        return permissao;
    }

    async deletarPermissaoPorId(id) {
        const permissao = await database.permissoes.findOne({
            where: {
                id: id
            }
        });

        if (!permissao) {
            throw new Error('Permissão informada não cadastrada!');
        }

        await database.permissoes.destroy({
            where: {
                id: id
            }
        });
    }

    async editarPermissao(dto) {
        const permissao = await database.permissoes.findOne({
            where: {
                id: dto.id
            }
        });

        if (!permissao) {
            throw new Error('Permissão informada não cadastrada!');
        }

        try {
            await database.permissoes.update({
                nome: dto.nome,
                descricao: dto.descricao
            }, {
                where: {
                    id: dto.id
                }
            });

            const permissaoAtualizada = await database.permissoes.findOne({
                where: {
                    id: dto.id
                }
            });

            return permissaoAtualizada;
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }
}

module.exports = PermissaoService;
