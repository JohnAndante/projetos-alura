const { Router } = require('express');

const CategoriaController = require('../controllers/CategoriaController');
const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', categoriaController.getAll);
router.get('/categorias/:id', categoriaController.getById);
router.post('/categorias', categoriaController.create);
router.put('/categorias/:id', categoriaController.update);
router.delete('/categorias/:id', categoriaController.delete);

module.exports = router;
