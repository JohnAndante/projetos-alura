import io from "./server.js";

const documents = [
    {
        name: "JavaScript",
        text: "JavaScript text..."
    },
    {
        name: "Node",
        text: "Node text..."
    },
    {
        name: "Socket.io",
        text: "Socket.io text..."
    }
];

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });

    socket.on("texto_alterado", ({ text, document }) => {
        const doc = findDocument(document);

        if (doc) {
            doc.text = text;
        }

        socket.to(document).emit("atualizar_texto", text);
    });

    socket.on("selecionar_documento", (documentName, callback) => {
        socket.join(documentName);

        const doc = findDocument(documentName);

        if (doc) {
            callback(doc.text);
        }
    });
});

function findDocument(document) {
    const doc = documents.find(doc => doc.name === document);
    return doc;
}
