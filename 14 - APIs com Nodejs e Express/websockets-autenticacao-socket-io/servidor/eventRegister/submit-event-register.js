import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

function submitEventRegister(socket, io) {
    socket.on("cadastrar_usuario", async (dados) => {
        const usuarioExiste = await encontrarUsuario(dados.nome);

        if (!usuarioExiste || usuarioExiste === null) {

            const resultado = await cadastrarUsuario(dados);

            if (resultado.acknowledged) {
                socket.emit("cadastro_sucesso")
            } else {
                socket.emit("cadastro_erro")
            }
        } else {
            socket.emit("usuario_existente")
        }
    });
};

export default submitEventRegister;
