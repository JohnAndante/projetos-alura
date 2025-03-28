import io from "./servidor.js";
import autorizaUsuario from "./middlewares/autorizaUsuario.js";

import documentEventRegister from "./eventRegister/document-event-register.js";
import startEventRegister from "./eventRegister/start-event-register.js";
import submitEventRegister from "./eventRegister/submit-event-register.js";
import loginEventRegister from "./eventRegister/login-event-register.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizaUsuario);

nspUsuarios.on("connection", socket => {
    console.log("🔗 Novo cliente autenticado conectado! > ID:", socket.id);

    socket.on("disconnect", () => {
        console.log("🏃 Cliente autenticado desconectado! > ID:", socket.id);
    });

    startEventRegister(socket, io);
    documentEventRegister(socket, io);
});

io.of("/").on("connection", socket => {
    console.log("🔗 Novo cliente não autenticado conectado! > ID:", socket.id);

    socket.on("disconnect", () => {
        console.log("🏃 Cliente não autenticado desconectado! > ID:", socket.id);
    });

    submitEventRegister(socket, io);
    loginEventRegister(socket, io);
});
