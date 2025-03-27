import io from "./servidor.js";
import documentEventRegister from "./eventRegister/document-event-register.js";
import startEventRegister from "./eventRegister/start-event-register.js";
import submitEventRegister from "./eventRegister/submit-event-register.js";

io.on("connection", socket => {
    console.log("🔗 Novo cliente conectado! > ID:", socket.id);

    socket.on("disconnect", () => {
        console.log("🏃 Cliente desconectado! > ID:", socket.id);
    });

    startEventRegister(socket, io);
    documentEventRegister(socket, io);
    submitEventRegister(socket, io);
});
