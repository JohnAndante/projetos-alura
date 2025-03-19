const { Router } = require('express');

const PessoaController = require('../controllers/PessoaController');
const pessoaController = new PessoaController();

const router = Router();

router.get('/pessoas', pessoaController.getAll);
router.get('/pessoas/:id', pessoaController.getById);
router.post('/pessoas', pessoaController.create);
router.put('/pessoas/:id', pessoaController.update);
router.delete('/pessoas/:id', pessoaController.delete);

module.exports = router;
