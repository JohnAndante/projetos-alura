class ErrorBase extends Error {
    constructor(message = "Erro interno do servidor", status = 500) {
        super();
        this.message = message;
        this.status = status;
    }

    sendResponse(res) {
        return res.status(this.status).json({ message: this.message });
    }
}

export default ErrorBase;
