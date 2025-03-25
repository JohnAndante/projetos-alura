import { enviarTexto } from "./socket-web.js";

const editorTexto = document.getElementById('editor-texto');

function atualizarTexto(texto) {
    editorTexto.value = texto;
}

editorTexto.addEventListener('input', () => {
    const texto = editorTexto.value;
    enviarTexto(texto);
});

export { atualizarTexto };
