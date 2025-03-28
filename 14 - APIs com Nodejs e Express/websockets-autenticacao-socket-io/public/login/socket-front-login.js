import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", tokenJwt => {
    definirCookie("token", tokenJwt);

    alert("Usuário autenticado com sucesso");
    window.location.href = "/index.html";
});

socket.on("autenticacao_erro", () => {
    alert("Usuário ou senha inválidos");
});

socket.on("usuario_nao_encontrado", () => {
    alert("Usuário não encontrado");
});


export { emitirAutenticarUsuario }
