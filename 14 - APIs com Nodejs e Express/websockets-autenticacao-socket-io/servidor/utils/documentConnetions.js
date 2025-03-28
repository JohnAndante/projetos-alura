const documentConnections = [];

function obterUsuariosNoDocumento(nomeDocumento) {
    return documentConnections
        .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
        .map((conexao) => conexao.usuarios);
}

function encontrarConexaoDocumento({ nomeDocumento, nomeUsuario }) {
    return documentConnections.find((conexao) => conexao.nomeDocumento === nomeDocumento && conexao.usuarios === nomeUsuario);
}

function adicionarConexaoDocumento({ nomeDocumento, nomeUsuario }) {
    documentConnections.push({ nomeDocumento, usuarios: nomeUsuario });
}

function removerConexaoDocumento({ nomeDocumento, nomeUsuario }) {
    const index = documentConnections.findIndex((conexao) => conexao.nomeDocumento === nomeDocumento && conexao.usuarios === nomeUsuario);

    if (index !== -1) {
        documentConnections.splice(index, 1);
    }
}

export { obterUsuariosNoDocumento, encontrarConexaoDocumento, adicionarConexaoDocumento, removerConexaoDocumento };
