import { createHash } from 'crypto';

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = this.criaHash(senha);
    }

    autentica(nome, senha) {
        if (this.nome === nome && this.senha === this.criaHash(senha)) {
            console.log('Usuário autenticado com sucesso!');
            return true;
        }

        console.log('Usuário ou senha inválidos!');
        return false;
    }

    toString() {
        const objUsuario = {
            nome: this.nome,
            senha: this.senha
        };

        return `Usuario: ${JSON.stringify(objUsuario, null, 2)}`;
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }

    static criaUsuario(nome, senha) {
        return new Usuario(nome, senha);
    }
}

const usuario = Usuario.criaUsuario('walker', 'senha123');

const dicionario = [
    '123456',
    'senha',
    '123456789',
    'admin',
    '1234',
    '12345',
    '12345678',
    'qwerty',
    'password',
    'abc123',
    '123',
    'password1',
    '123123',
    'admin123',
    'senha123',
];

// Simula um ataque de força bruta para descobrir a senha a partir de um dicionário
for (const senhaTeste of dicionario) {
    if (usuario.autentica('walker', senhaTeste)) {
        console.log(`Senha encontrada: ${senhaTeste}`);
        break;
    }
}

