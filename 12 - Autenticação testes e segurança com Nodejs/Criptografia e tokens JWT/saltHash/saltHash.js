import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSalt(senha, salt) {
    const hash = scryptSync(senha, salt, 64);
    return `${salt}:${hash.toString('hex')}`;
}

function criaSalt() {
    return randomBytes(16).toString('hex');
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.salt, this.hash] = criaHashComSalt(senha, criaSalt()).split(':');
    }

    autentica(nome, senha) {
        if (this.nome !== nome) {
            return false;
        }

        const testeHash = scryptSync(senha, this.salt, 64);
        const hashReal = Buffer.from(this.hash, 'hex');

        const hashsCorrespondem = timingSafeEqual(testeHash, hashReal);

        if (hashsCorrespondem) {
            console.log('Hashs correspondem');
            return true;
        }

        console.log('Hashs não correspondem');
        return false;
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
