import { generateKeyPairSync } from 'crypto';

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

console.log('publicKey', publicKey);
console.log('privateKey', privateKey);

import { publicEncrypt, privateDecrypt } from 'crypto';

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from('Top 5 Mensagens'));
console.log('dadosCriptografados', dadosCriptografados.toString('base64'));

const dadosDescriptografados = privateDecrypt(privateKey, dadosCriptografados);
console.log('dadosDescriptografados', dadosDescriptografados.toString());

