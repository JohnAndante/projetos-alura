import {
    alertarERedirecionar, atualizarInterfaceDocumentoUsuarios, atualizaTextoEditor, tratarAutorizacaoSucesso,
} from "./documento.js";
import { obterCookie } from "../utils/cookies.js";

const socket = io("/usuarios", {
    auth: {
        token: obterCookie("token")
    }
});

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso);

socket.on("connect_error", erro => {
    alert(erro);
    window.location.href = "/login/index.html";
});

function selecionarDocumento(dadosEntrada) {
    socket.emit("selecionar_documento", dadosEntrada, (texto) => {
        atualizaTextoEditor(texto);
    });
}

socket.on("usuario_ja_no_documento", () => {
    alert("Documento já está aberto em outra aba!");
    window.location.href = "/";
});

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
    socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
    alertarERedirecionar(nome);
});

socket.on("usuarios_no_documento", atualizarInterfaceDocumentoUsuarios);

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
