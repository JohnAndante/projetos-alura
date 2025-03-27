import { emitirCadastrarUsuario } from "./socket-front-cadastro";

const form = document.querySelector("form-cadastro");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;

    emitirCadastrarUsuario({ nome, senha });
});
