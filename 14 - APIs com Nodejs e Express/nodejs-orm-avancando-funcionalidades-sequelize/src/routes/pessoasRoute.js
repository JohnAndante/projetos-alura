const { Router } = require('express');

const PessoaController = require('../controllers/PessoaController');
const MatriculaController = require('../controllers/MatriculaController');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', pessoaController.getAll);
router.get('/pessoas/todos', pessoaController.getAllUsers);
router.get('/pessoas/:id', pessoaController.getById);
router.post('/pessoas', pessoaController.create);
router.put('/pessoas/:id', pessoaController.update);
router.delete('/pessoas/:id', pessoaController.delete);

router.get('/pessoas/:estudante_id/matriculas', pessoaController.getActiveRegistrations);
router.get('/pessoas/:estudante_id/matriculas/todos', pessoaController.getAllRegistrations);
router.get('/pessoas/:estudante_id/matriculas/:id', matriculaController.getOne);
router.post('/pessoas/:estudante_id/matriculas', matriculaController.create);
router.put('/pessoas/:estudante_id/matriculas/:id', matriculaController.update);
router.delete('/pessoas/:estudante_id/matriculas/:id', matriculaController.delete);

module.exports = router;
