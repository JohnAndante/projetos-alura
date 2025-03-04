import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import Usuario from '../models/usuario.js';
import constants from '../config/constants.js';

class AuthService {
    static async login(data) {
        try {
            if (!data.email) {
                throw new Error('O campo email do usuário é obrigatório.');
            }

            if (!data.senha) {
                throw new Error('O campo senha do usuário é obrigatório.');
            }

            const usuario = await Usuario.pegarPeloEmail(data.email);

            if (!usuario) {
                throw new Error('Usuário não cadastrado.');
            }

            const senhaIguais = await bcryptjs.compare(data.senha, usuario.senha);

            if (!senhaIguais) {
                throw new Error('Usuário ou senha invalido.');
            }

            const accessToken = jsonwebtoken.sign({
                id: usuario.id,
                email: usuario.email,
            }, constants.jsonSecret, {
                expiresIn: 86400,
            });

            return { message: 'Usuário conectado', accessToken };
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async cadastrarUsuario(data) {
        try {
            if (!data.senha) {
                throw new Error('A senha de usuário é obrigatória');
            }

            if (!data.email) {
                throw new Error('O email do usuario é obrigatório.');
            }

            if (!data.nome) {
                throw new Error('O nome do usuario é obrigatório.');
            }

            const usuarioExistente = await Usuario.pegarPeloEmail(data.email);

            if (usuarioExistente) {
                throw new Error('Email já cadastrado.');
            }

            const senhaCriptografada = await bcryptjs.hash(data.senha, 8);
            const novosDados = { ...data, senha: senhaCriptografada };
            const usuario = new Usuario(novosDados);
            const resposta = await usuario.salvar(usuario);
            return { message: 'usuario criado', content: resposta };
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

export default AuthService;
