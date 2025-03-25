import { updateText } from "./scripts.js";

const socket = io();

function selectDocument(document) {
    socket.emit("selecionar_documento", document, (text) => {
        updateText(text);
    });
}

function sendText({ text, document }) {
    socket.emit('texto_alterado', { text, document });
}

socket.on('atualizar_texto', text => {
    updateText(text);
})

export { sendText, selectDocument };
