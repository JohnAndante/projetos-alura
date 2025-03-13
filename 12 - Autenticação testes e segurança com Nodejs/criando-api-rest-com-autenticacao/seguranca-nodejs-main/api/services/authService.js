const database = require('../models');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { secret } = require('../config/jsonSecret');


class AuthService {
    async login(dto) {
        const usuario = await database.usuarios.findOne({
            where: {
                email: dto.email,
            },
            attributes: ['id', 'nome', 'email']
        });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const senhaCorreta = await compare(dto.senha, usuario.senha);

        if (!senhaCorreta) {
            throw new Error('Senha incorreta');
        }

        const accessToken = sign(
            {
                id: usuario.id,
                email: usuario.email,
                nome: usuario.nome
            },
            secret,
            {
                expiresIn: 86400,
            });

        return { accessToken };
    }
}

module.exports = AuthService;
