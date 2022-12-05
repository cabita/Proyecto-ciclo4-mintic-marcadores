const express = require('express');
const deportesController = require('../controllers/deportesController.js');
const router = express.Router();


router.get('/', deportesController.listarDeportes);
router.get('/:id', deportesController.obtenerDeportePorId);
router.post('/', deportesController.guardarDeporte);
router.put('/', deportesController.actualizarDeporte);
router.delete('/:id', deportesController.eliminarDeporte);

module.exports = router;