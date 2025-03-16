import ErrorBase from "./BaseError.js";

class BadRequestError extends ErrorBase {
    constructor(message = "Um ou mais dos parâmetros enviados estão incorretos", status = 400) {
        super(message, status);
    }
}

export default BadRequestError;
