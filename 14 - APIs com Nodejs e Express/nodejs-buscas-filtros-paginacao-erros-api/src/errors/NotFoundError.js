import ErrorBase from './BaseError.js';

class NotFoundError extends ErrorBase {
    constructor(message = "Rota não encontrada") {
        super(message);
    }
}

export default NotFoundError;
