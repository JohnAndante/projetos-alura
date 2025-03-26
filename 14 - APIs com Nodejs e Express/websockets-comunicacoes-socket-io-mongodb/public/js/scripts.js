import { emitDeleteDocument } from "./socket-web-index.js";
import { selectDocument, sendText } from "./socket-web.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get('nome');

const textEditor = document.getElementById('editor-texto');
const documentTitle = document.getElementById('titulo-documento');
const deleteButton = document.getElementById('excluir-documento');

if (documentTitle) {
    documentTitle.textContent = documentName ? `Editor de texto - ${documentName}` : 'Documento sem título';
}

selectDocument(documentName);

function updateText(texto) {
    textEditor.value = texto;
}

function alertAndRedirect(document) {
    if (document === documentName) {
        alert(`O documento ${document} foi excluído`);
        window.location.href = '/';
    }
}

if (textEditor) {
    textEditor.addEventListener('input', () => {
        sendText({
            text: textEditor.value,
            document: documentName,
        });
    });
}

if (deleteButton) {
    deleteButton.addEventListener('click', () => {
        emitDeleteDocument(documentName);
    });
}

export { updateText, alertAndRedirect };
