const { Router } = require('express');
const PermissaoController = require('../controllers/permissaoController');
const autenticado = require('../middleware/autenticado');

const router = Router();

router.use(autenticado);

router
    .post('/permissao', PermissaoController.cadastrarPermissao)
    .get('/permissao', PermissaoController.buscarTodasPermissoes)
    .get('/permissao/id/:id', PermissaoController.buscarPermissaoPorId)
    .delete('/permissao/id/:id', PermissaoController.deletarPermissaoPorId)
    .put('/permissao/id/:id', PermissaoController.editarPermissao);

module.exports = router;
