import { selectDocument, sendText } from "./socket-web.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get('nome');

const textEditor = document.getElementById('editor-texto');
const documentTitle = document.getElementById('titulo-documento');

documentTitle.textContent = documentName ? `Editor de texto - ${documentName}` : 'Documento sem título';

selectDocument(documentName);

function updateText(texto) {
    textEditor.value = texto;
}

textEditor.addEventListener('input', () => {
    sendText({
        text: textEditor.value,
        document: documentName,
    });
});

export { updateText };
