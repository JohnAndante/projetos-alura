import express from "express";
import router from "./routes/routes.js";
import dbConnect from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/error.js";

const conexao = await dbConnect();

conexao.on("error", error => {
    console.error("❌ Erro ao conectar no banco de dados", error);
});

conexao.once("open", () => {
    console.log("⚙️  Conectado no banco de dados");
});

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

export default app;
