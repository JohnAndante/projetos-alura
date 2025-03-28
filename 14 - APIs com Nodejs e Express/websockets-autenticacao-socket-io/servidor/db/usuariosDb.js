import { criaHashSenha } from "../utils/hash.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
    return usuariosColecao.findOne({ nome });
}

function cadastrarUsuario({ nome, senha }) {
    const { hash, salt } = criaHashSenha(senha);

    return usuariosColecao.insertOne({ nome, hash, salt });
}


export { cadastrarUsuario, encontrarUsuario };
