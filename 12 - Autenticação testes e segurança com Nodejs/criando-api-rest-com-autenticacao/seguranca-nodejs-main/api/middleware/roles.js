const database = require('../models');

const roles = listaRoles => {
    return async (req, res, next) => {
        const { usuario: { id } } = req;

        const usuario = await database.usuarios.findOne({
            include: [
                {
                    model: database.roles,
                    as: 'usuario_roles',
                    attributes: ['id', 'nome'],
                },
            ],
            where: {
                id
            }
        });

        if (!usuario) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        const rolesCadastradas = usuario.usuario_roles
            .map(role => role.nome)
            .some(role => listaRoles.includes(role));

        if (!rolesCadastradas) {
            return res.status(403).json({ message: 'Usuário não tem permissão para acessar esse recurso' });
        }

        next();
    };
};

module.exports = roles;
