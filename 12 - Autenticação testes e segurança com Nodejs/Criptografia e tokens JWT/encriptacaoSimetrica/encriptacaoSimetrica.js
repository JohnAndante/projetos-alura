import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const mensagem = "Demonstração do curso";
const chave = randomBytes(32);
const iv = randomBytes(16);

const cifra = createCipheriv('aes256', chave, iv);

const mensagemCifrada = cifra.update(mensagem, 'utf8', 'hex') + cifra.final('hex');

console.log('Mensagem cifrada:', mensagemCifrada);

const decifra = createDecipheriv('aes256', chave, iv);

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf8') + decifra.final('utf8');

console.log('Mensagem decifrada:', mensagemDecifrada);
