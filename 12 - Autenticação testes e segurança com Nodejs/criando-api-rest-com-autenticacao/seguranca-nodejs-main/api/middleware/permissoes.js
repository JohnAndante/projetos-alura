const database = require('../models');

const permissoes = listaPermissoes => {
    return async (req, res, next) => {
        const { usuario: { id } } = req;

        const usuario = await database.usuarios.findOne({
            include: [
                {
                    model: database.permissoes,
                    as: 'usuario_permissoes',
                    attributes: ['id', 'nome'],
                },
            ],
            where: {
                id
            }
        });

        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        const permissoesCadastradas = usuario.usuario_permissoes
            .map(permissao => permissao.nome)
            .some(permissao => listaPermissoes.includes(permissao));

        if (!permissoesCadastradas) {
            return res.status(403).json({ erro: 'Sem permissão' });
        }

        next();
    };
};

module.exports = permissoes;
