import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

function adicionarDocumento(name) {
    const resultado = documentosColecao.insertOne({
        name,
        text: "",
    });

    return resultado;
}

function encontrarDocumento(name) {
    const documento = documentosColecao.findOne({
        name,
    });

    return documento;
}

function atualizaDocumento(name, text) {
    const atualizacao = documentosColecao.updateOne(
        {
            name,
        },
        {
            $set: {
                text,
            },
        }
    );

    return atualizacao;
}

function excluirDocumento(name) {
    const resultado = documentosColecao.deleteOne({
        name,
    });

    return resultado;
}

export {
    encontrarDocumento,
    atualizaDocumento,
    obterDocumentos,
    adicionarDocumento,
    excluirDocumento,
};
