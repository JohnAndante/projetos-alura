const { Router } = require('express');

const CursoController = require('../controllers/CursoController');
const cursoController = new CursoController();

const router = Router();

router.get('/cursos', cursoController.getCourses);
router.get('/cursos/:id', cursoController.getById);
router.post('/cursos', cursoController.create);
router.put('/cursos/:id', cursoController.update);
router.delete('/cursos/:id', cursoController.delete);

module.exports = router;
