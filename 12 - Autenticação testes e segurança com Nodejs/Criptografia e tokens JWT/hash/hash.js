import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash('senha123'));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = criaHash(senha);
    }

    autentica(nome, senha) {
        return this.nome === nome && this.senha === criaHash(senha);
    }

    toString() {
        return `Usuário: ${this.nome}`;
    }

    static criaUsuario(nome, senha) {
        return new Usuario(nome, senha);
    }
}

const usuario = Usuario.criaUsuario('usuario', 'senha123');
console.log(usuario.toString());
console.log(usuario.autentica('usuario', 'senha123'));
console.log(usuario.autentica('usuario', 'senha1234'));
