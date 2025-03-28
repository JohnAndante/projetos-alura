import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import BadRequestError from "../errors/BadRequestError.js";
import ValidationError from "../errors/ValidationError.js";
import NotFoundError from "../errors/NotFoundError.js";

const errorMiddleware = (error, req, res, next) => {
    console.error("❌  > Erro interno do servidor", error);

    if (error instanceof mongoose.Error.CastError) {
        return new BadRequestError("ID inválido", 400).sendResponse(res);
    }

    if (error instanceof mongoose.Error.ValidationError) {
        return new ValidationError(error, "Erro de validação", 400).sendResponse(res);
    }

    if (error instanceof NotFoundError) {
        return error.sendResponse(res);
    }

    return new BaseError("Erro interno do servidor", 500).sendResponse(res);
}

export default errorMiddleware;
