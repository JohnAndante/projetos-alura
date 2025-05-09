const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticado = require('../middleware/autenticado');

const router = Router();

router.use(autenticado);

router
    .post('/usuario', UsuarioController.cadastrarUsuario)
    .get('/usuario', UsuarioController.buscarTodosUsuarios)
    .get('/usuario/id/:id', UsuarioController.buscarUsuarioPorId)
    .delete('/usuario/id/:id', UsuarioController.deletarUsuarioPorId)
    .put('/usuario/id/:id', UsuarioController.editarUsuario);

module.exports = router;
