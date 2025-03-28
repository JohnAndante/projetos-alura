const { Router } = require('express');

const MatriculaController = require('../controllers/MatriculaController');
const matriculaController = new MatriculaController();

const router = Router();

router.get('/matriculas', matriculaController.getAll);
router.get('/matriculas/:id', matriculaController.getById);
router.post('/matriculas', matriculaController.create);
router.put('/matriculas/:id', matriculaController.update);
router.delete('/matriculas/:id', matriculaController.delete);

module.exports = router;
