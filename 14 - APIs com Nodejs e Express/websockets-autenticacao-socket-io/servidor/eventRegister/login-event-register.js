import { encontrarUsuario } from "../db/usuariosDb.js";
import { autenticarUsuario } from "../utils/auth.js";
import { gerarTokenJwt } from "../utils/jwt.js";

function loginEventRegister(socket, io) {
    socket.on("autenticar_usuario", async ({ nome, senha }) => {
        const usuario = await encontrarUsuario(nome);

        if (!usuario) {
            socket.emit("usuario_nao_encontrado");
            return;
        }

        const autenticado = autenticarUsuario(senha, usuario);

        if (autenticado) {
            const tokenJwt = gerarTokenJwt({ usuario: { nome: usuario.nome } });

            socket.emit("autenticacao_sucesso", tokenJwt);
        } else {
            socket.emit("autenticacao_erro");
        };
    });
}

export default loginEventRegister;
