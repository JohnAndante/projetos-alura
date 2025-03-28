import {
    emitirExcluirDocumento,
    emitirTextoEditor,
    selecionarDocumento,
} from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

function tratarAutorizacaoSucesso(payloadToken) {
    selecionarDocumento({ nomeDocumento, nomeUsuario: payloadToken.usuario.nome });
};

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textoEditor.value,
        nomeDocumento,
    });
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDocumento);
});

function alertarERedirecionar(nome) {
    if (nome === nomeDocumento) {
        alert(`Documento ${nome} excluído!`);
        window.location.href = "/";
    }
}

function atualizarInterfaceDocumentoUsuarios(usuarios) {
    console.log(usuarios);
    const listaUsuarios = document.getElementById("usuarios-conectados");

    listaUsuarios.innerHTML = "";

    usuarios.forEach((usuario) => {
        const itemLista = document.createElement("li");
        itemLista.classList.add("list-group-item");
        itemLista.textContent = usuario;
        listaUsuarios.appendChild(itemLista);
    });
}

export { tratarAutorizacaoSucesso, atualizaTextoEditor, alertarERedirecionar, atualizarInterfaceDocumentoUsuarios };
