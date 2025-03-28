import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

/**
 * @type {import("mongodb").Collection | null}
 */
let documentosColecao;

/**
 * @type {import("mongodb").Collection | null}
 */
let usuariosColecao;

try {
    await client.connect();

    const db = client.db("alura-websockets");
    documentosColecao = db.collection("documentos");
    usuariosColecao = db.collection("usuarios");

    console.log("✅ Conectado ao banco de dados com sucesso!");
} catch (erro) {
    console.error("❌ Erro ao conectar ao banco de dados:", erro);
}

export { documentosColecao, usuariosColecao };
