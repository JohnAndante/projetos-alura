const { v4: uuidv4 } = require('uuid');
const database = require('../models');
const { hash } = require('bcrypt');

class UsuarioService {
    async cadastrarUsuario(dto) {
        const usuario = await database.usuarios.findOne({
            where: {
                email: dto.email
            }
        });

        if (usuario) {
            throw new Error('Usuário já cadastrado');
        }

        const senhaCriptografada = await hash(dto.senha, 10);

        try {
            const newUsuario = await database.usuarios.create({
                id: uuidv4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaCriptografada,
            });

            return newUsuario;
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }

    async buscarTodosUsuarios() {
        const usuarios = await database.usuarios.findAll();

        return usuarios;
    }

    async buscarUsuarioPorId(id) {
        const usuario = await database.usuarios.findOne({
            where: {
                id: id
            }
        });

        if (!usuario) {
            throw new Error('Usuário informado não cadastrado!');
        }

        return usuario;
    }

    async deletarUsuarioPorId(id) {
        const usuario = await database.usuarios.findOne({
            where: {
                id: id
            }
        });

        if (!usuario) {
            throw new Error('Usuário informado não cadastrado!');
        }

        await database.usuarios.destroy({
            where: {
                id: id
            }
        });
    }

    async editarUsuario(id, dto) {
        const usuario = await database.usuarios.findOne({
            where: {
                id: id
            }
        });

        if (!usuario) {
            throw new Error('Usuário informado não cadastrado!');
        }

        try {
            await database.usuarios.update(dto, {
                where: {
                    id: id
                }
            });

            const usuarioAtualizado = await database.usuarios.findOne({
                where: {
                    id: id
                }
            });

            return usuarioAtualizado;
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }
}

module.exports = UsuarioService;
