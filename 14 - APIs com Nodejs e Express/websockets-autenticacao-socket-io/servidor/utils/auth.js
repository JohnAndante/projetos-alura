import { scryptSync, timingSafeEqual } from 'crypto';

function autenticarUsuario(senha, usuario) {
    const hashTest = scryptSync(senha, usuario.salt, 64);

    const realHash = Buffer.from(usuario.hash, 'hex');

    const autenticado = timingSafeEqual(hashTest, realHash);

    return autenticado;
}

export { autenticarUsuario };
