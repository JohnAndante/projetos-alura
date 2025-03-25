import { atualizarTexto } from "./scripts.js";

const socket = io();

function enviarTexto(texto) {
    socket.emit('texto_alterado', texto);
}

socket.on('atualizar_texto', (texto) => {
    atualizarTexto(texto);
})

export { enviarTexto };
