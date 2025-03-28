import jwt from "jsonwebtoken";

function autorizaUsuario(socket, next) {
    const token = socket.handshake.auth.token;

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        socket.emit("autorizacao_sucesso", payload);

        next();
    } catch (error) {
        return next(new Error("Token inválido"));
    }

    next();
}

export default autorizaUsuario;

