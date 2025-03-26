import { emitAddDocument } from './socket-web-index.js';

const documentsList = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const input = document.getElementById('input-documento');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        emitAddDocument(input.value);

        input.value = '';
    })
}

function insertDocumentLink(documentName) {
    if (!documentsList) {
        return;
    }

    documentsList.innerHTML += /* html */`
        <a href="documento.html?nome=${documentName}" class="list-group-item list-group-item-action" id="documento-${String(documentName).replaceAll(' ', '-')}">
            ${documentName}
        </a>
    `
}

const alertDiv = document.getElementById('erro-adiciona-documento-div');

function showDocumentExistsAlert(documentName) {
    alertDiv.innerHTML += /* html */`
        <div class="alert alert-danger" role="alert">
            O documento ${documentName} já existe
        </div>
    `;

    alertDiv.classList.remove('d-none');
    alertDiv.scrollIntoView();


    setTimeout(() => {
        alertDiv.innerHTML = '';
        alertDiv.classList.add('d-none');
    }, 3000);
}

function removeDocumentLink(documentName) {
    const documentLink = documentsList.querySelector(`#documento-${String(documentName).replaceAll(' ', '-')}`);

    if (documentLink) {
        documentLink.remove();
    }
}

export { insertDocumentLink, showDocumentExistsAlert, removeDocumentLink };
