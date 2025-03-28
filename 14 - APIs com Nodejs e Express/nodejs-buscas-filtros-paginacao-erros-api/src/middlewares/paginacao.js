const paginacao = (req, res, next) => {
    try {
        const { pagina, limite } = req.query;

        const paginaInt = parseInt(pagina, 10) || 1;
        const limiteInt = parseInt(limite, 10) || 10;

        if (paginaInt < 1 || limiteInt < 1) {
            throw new Error();
        }

        req.paginacao = {
            skip: (paginaInt - 1) * limiteInt,
            limit: limiteInt,
        };

        next();
    } catch (error) {
        req.paginacao = {
            skip: 0,
            limit: 10,
        };

        next();
    }
}

export default paginacao;
