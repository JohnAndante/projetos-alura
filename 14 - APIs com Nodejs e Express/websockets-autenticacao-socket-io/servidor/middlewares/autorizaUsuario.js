function autorizaUsuario(socket, next) {
    const token = socket.handshake.auth.token;

    if (!token) {
        return next(new Error("Token não encontrado"));
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        socket.usuario = payload.usuario;
        console.log("🔑 Usuário autenticado:", socket.usuario);
    } catch (error) {
        return next(new Error("Token inválido"));
    }

    next();
}

export default autorizaUsuario;

