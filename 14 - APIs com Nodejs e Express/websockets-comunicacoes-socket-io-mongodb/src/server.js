import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentPath);

const httpServer = http.createServer(app);

app.use(express.static(path.join(currentDir, "../public")));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
});
