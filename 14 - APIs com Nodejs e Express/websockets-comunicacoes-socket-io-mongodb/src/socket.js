import io from "./server.js";

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });

    socket.on("texto_alterado", texto => {
        socket.broadcast.emit("atualizar_texto", texto);
    });
});
