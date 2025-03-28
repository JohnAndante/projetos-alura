import { randomBytes, scryptSync } from 'crypto';

function criaHashSenha(senha) {
    const salt = randomBytes(16).toString('hex');
    const hash = scryptSync(senha, salt, 64).toString('hex');

    return { hash, salt };
}

export { criaHashSenha };
