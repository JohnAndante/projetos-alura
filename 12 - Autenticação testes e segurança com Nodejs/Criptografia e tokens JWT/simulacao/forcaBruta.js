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

const usuario = Usuario.criaUsuario('walker', '98731a');

// Simula um ataque de força bruta para descobrir uma senha numérica
// for (let senhaTeste = 0; senhaTeste < 100000; senhaTeste++) {
//     if (usuario.autentica('walker', senhaTeste.toString())) {
//         console.log(`Senha encontrada: ${senhaTeste}`);
//         break;
//     }
// }

// ...existing code...

// Simula um ataque de força bruta para descobrir uma senha alfanumérica
// const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// const tamanhoSenha = 6;

// function gerarSenha(indices) {
//     return indices.map(i => caracteres[i]).join('');
// }

// function atacarForcaBruta() {
//     const indices = new Array(tamanhoSenha).fill(0);

//     while (true) {
//         const senhaTeste = gerarSenha(indices);
//         console.log(`Testando senha: ${senhaTeste}`);

//         if (usuario.autentica('walker', senhaTeste)) {
//             console.log(`Senha encontrada: ${senhaTeste}`);
//             return;
//         }

//         // Incrementa os índices como um contador
//         let posicao = tamanhoSenha - 1;
//         while (posicao >= 0) {
//             indices[posicao]++;
//             if (indices[posicao] === caracteres.length) {
//                 indices[posicao] = 0;
//                 posicao--;
//             } else {
//                 break;
//             }
//         }

//         // Se não houver mais combinações possíveis
//         if (posicao < 0) break;
//     }

//     console.log('Senha não encontrada');
// }

// atacarForcaBruta();

// Simula um ataque de força bruta para descobrir uma senha alfanumérica, um pouco mais rápido
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { fileURLToPath } from 'url';

const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const tamanhoSenha = 6;
const numWorkers = 4; // Número de workers para paralelização
const senhasTestadas = new Set(); // Usa Set para verificação mais rápida

if (isMainThread) {
    // Código principal
    function iniciarAtaqueForcaBruta() {
        const workers = new Array(numWorkers).fill(null).map((_, index) => {
            const worker = new Worker(fileURLToPath(import.meta.url), {
                workerData: { workerId: index }
            });

            worker.on('message', (message) => {
                if (message.encontrou) {
                    console.log(`Senha encontrada: ${message.senha}`);
                    process.exit(0);
                }
            });

            return worker;
        });
    }

    iniciarAtaqueForcaBruta();
} else {
    // Código do worker
    function gerarSenhaAleatoria() {
        let senha = '';
        for (let i = 0; i < tamanhoSenha; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[indice];
        }
        return senha;
    }

    function verificarSenha(senha) {
        const hash = createHash('sha256').update(senha).digest('hex');
        // Compara diretamente com o hash da senha original '98731a'
        return hash === usuario.senha;
    }

    while (true) {
        const senhaTeste = gerarSenhaAleatoria();

        // Verifica localmente se a senha já foi testada
        if (!senhasTestadas.has(senhaTeste)) {
            senhasTestadas.add(senhaTeste);

            if (verificarSenha(senhaTeste)) {
                parentPort.postMessage({ encontrou: true, senha: senhaTeste });
                break;
            }

            // A cada 1000 tentativas, limpa parte da memória
            if (senhasTestadas.size > 1000) {
                const paraDeletar = Array.from(senhasTestadas).slice(0, 500);
                paraDeletar.forEach(s => senhasTestadas.delete(s));
            }
        }
    }
}
