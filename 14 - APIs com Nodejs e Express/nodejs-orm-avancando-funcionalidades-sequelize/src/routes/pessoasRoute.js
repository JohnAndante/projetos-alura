const { Router } = require('express');

const PessoaController = require('../controllers/PessoaController');
const MatriculaController = require('../controllers/MatriculaController');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', pessoaController.getAll);
router.get('/pessoas/:id', pessoaController.getById);
router.post('/pessoas', pessoaController.create);
router.put('/pessoas/:id', pessoaController.update);
router.delete('/pessoas/:id', pessoaController.delete);
router.post('/pessoas/:estudanteId/matriculas', matriculaController.create);
router.get('/pessoas/:estudanteId/matriculas', pessoaController.getRegistrations);


module.exports = router;
