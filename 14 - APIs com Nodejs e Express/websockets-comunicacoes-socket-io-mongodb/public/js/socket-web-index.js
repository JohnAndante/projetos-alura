import { insertDocumentLink, removeDocumentLink, showDocumentExistsAlert } from "./index.js";
import { alertAndRedirect } from "./scripts.js";

const socket = io();

socket.emit("obter_documentos", documents => {
    documents.forEach(doc => {
        insertDocumentLink(doc.name);
    });
});

function emitAddDocument(documentName) {
    socket.emit("adicionar_documento", documentName);
}

function emitDeleteDocument(documentName) {
    socket.emit("excluir_documento", documentName);
}

socket.on("documento_adicionado", documentName => {
    insertDocumentLink(documentName);
});

socket.on("documento_existente", documentName => {
    showDocumentExistsAlert(documentName);
});

socket.on("documento_excluido", documentName => {
    alertAndRedirect(documentName);
    removeDocumentLink(documentName);
});

export { emitAddDocument, emitDeleteDocument };
