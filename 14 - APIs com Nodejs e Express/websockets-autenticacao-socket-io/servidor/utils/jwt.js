import jwt from "jsonwebtoken";

function gerarTokenJwt(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}

export { gerarTokenJwt };
