import BadRequestError from "./BadRequestError.js";

class ValidationError extends BadRequestError {
    constructor(error, message = "Erro de validação", status = 400) {
        const errors = Object.values(error.errors).map(err => err.message).join("; ");

        message = `${message}: ${errors}`;

        super(message, status);
    }
}

export default ValidationError;
