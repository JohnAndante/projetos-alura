import NotFoundError from "../errors/NotFoundError.js";

function notFound(req, res, next) {
    const error = new NotFoundError();
    next(error);
}

export default notFound;
