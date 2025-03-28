import { encontrarDocumento, atualizaDocumento, excluirDocumento } from "../db/documentsDb.js";
import { adicionarConexaoDocumento, encontrarConexaoDocumento, obterUsuariosNoDocumento, removerConexaoDocumento } from "../utils/documentConnetions.js";

function documentEventRegister(socket, io) {
    socket.on("selecionar_documento", async ({ nomeDocumento, nomeUsuario }, devolverTexto) => {
        const documento = await encontrarDocumento(nomeDocumento);

        if (documento) {
            const conexaoEncontrada = encontrarConexaoDocumento({ nomeDocumento, nomeUsuario });

            if (!conexaoEncontrada) {
                socket.join(nomeDocumento);

                adicionarConexaoDocumento({ nomeDocumento, nomeUsuario });

                socket.data = {
                    usuarioEntrou: true,
                };

                const usuariosNoDocumento = obterUsuariosNoDocumento(nomeDocumento);

                io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);

                devolverTexto(documento.texto);
            } else {
                socket.emit("usuario_ja_no_documento");
            }
        }

        socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
            const atualizacao = await atualizaDocumento(nomeDocumento, texto);

            if (atualizacao.modifiedCount) {
                socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
            }
        });

        socket.on("excluir_documento", async (nome) => {
            const resultado = await excluirDocumento(nome);

            if (resultado.deletedCount) {
                io.emit("excluir_documento_sucesso", nome);
            }
        });

        socket.on("disconnect", () => {
            if (socket.data?.usuarioEntrou) {
                removerConexaoDocumento({ nomeDocumento, nomeUsuario });

                const usuariosNoDocumento = obterUsuariosNoDocumento(nomeDocumento);

                io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);
            }
        });
    });
}

export default documentEventRegister;
