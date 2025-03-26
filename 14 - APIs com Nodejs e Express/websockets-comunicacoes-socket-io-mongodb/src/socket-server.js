import io from "./server.js";
import { addDocument, deleteDocument, findDocument, getDocuments, updateDocument } from "./documentsDb.js";

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

    socket.on("obter_documentos", async returnDocuments => {
        const documents = await getDocuments();

        returnDocuments(documents);
    });

    socket.on("adicionar_documento", async documentName => {
        const documentExists = await findDocument(documentName);

        if (documentExists) {
            socket.emit("documento_existente", documentName);
            return;
        }

        const document = await addDocument(documentName);

        if (document.acknowledged) {
            socket.emit("documento_adicionado", documentName);
        }
    });

    socket.on("excluir_documento", async documentName => {
        const result = await deleteDocument(documentName);

        if (result.deletedCount) {
            io.emit("documento_excluido", documentName);
        }
    });
});

