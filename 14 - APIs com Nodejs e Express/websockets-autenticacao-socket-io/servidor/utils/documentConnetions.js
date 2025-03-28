const documentConnections = [];

function obterUsuariosNoDocumento(nomeDocumento) {
    return documentConnections
        .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
        .map((conexao) => conexao.usuarios);
}

function adicionarConexaoDocumento({ nomeDocumento, nomeUsuario }) {
    documentConnections.push({ nomeDocumento, usuarios: nomeUsuario });
}

function removerConexaoDocumento({ nomeDocumento, nomeUsuario }) {

}

export { obterUsuariosNoDocumento, adicionarConexaoDocumento, removerConexaoDocumento };
