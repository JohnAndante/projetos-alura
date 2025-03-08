const { Router } = require('express');
const RoleController = require('../controllers/roleController');
const autenticado = require('../middleware/autenticado');

const router = Router();

router.use(autenticado);

router
    .post('/role', RoleController.cadastrarRole)
    .get('/role', RoleController.buscarTodosRoles)
    .get('/role/id/:id', RoleController.buscarRolePorId)
    .delete('/role/id/:id', RoleController.deletarRolePorId)
    .put('/role/id/:id', RoleController.editarRole);

module.exports = router;
