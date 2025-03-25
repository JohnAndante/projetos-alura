import io from "./server.js";
import { findDocument, updateDocument } from "./documentsDb.js";

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });

    socket.on("texto_alterado", ({ text, document }) => {
        updateDocument(document, text)

        socket.to(document).emit("atualizar_texto", text);
    });

    socket.on("selecionar_documento", async (documentName, callback) => {
        socket.join(documentName);

        const doc = await findDocument(documentName);

        if (doc) {
            callback(doc.text);
        }
    });
});

