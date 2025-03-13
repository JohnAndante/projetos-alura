const { verify, decode } = require('jsonwebtoken');
const { secret } = require('../config/jsonSecret');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send({ message: 'Token não informado' });
        }

        const [, accessToken] = token.split(' ');

        if (!accessToken) {
            return res.status(401).send({ message: 'Token não informado' });
        }

        await verify(accessToken, secret);

        const { id, email, nome } = await decode(accessToken);

        req.usuario = { id, email, nome };

        next();

    } catch (error) {
        console.error('Message error: ', error.message);
        return res.status(401).send({ message: 'Token inválido' });
    }
};
