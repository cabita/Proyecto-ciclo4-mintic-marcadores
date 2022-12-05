const express = require('express');
const eventosController = require('../controllers/eventosController.js');
const router = express.Router();


router.get('/', eventosController.listarEventos);
router.get('/:id', eventosController.obtenerEventoPorId);
router.post('/', eventosController.guardarEvento);
router.put('/', eventosController.actualizarEvento);
router.delete('/:id', eventosController.eliminarEvento);

module.exports = router;