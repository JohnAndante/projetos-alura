const ordenacao = (req, res, next) => {
    const { ordenarPor, ordem } = req.query;

    if (ordenarPor && ordem) {
        req.ordenacao = {
            [ordenarPor]: ordem === 'asc' ? 1 : -1,
        };
    } else {
        req.ordenacao = {
            "_id": 1,
        };
    }

    next();
}

export default ordenacao;
