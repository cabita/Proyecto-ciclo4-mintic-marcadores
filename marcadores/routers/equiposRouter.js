const express = require('express');
const equiposController = require('../controllers/equiposController.js');
const router = express.Router();


router.get('/', equiposController.listarEquipos);
router.get('/:id', equiposController.obtenerEquipoPorId);
router.post('/', equiposController.guardarEquipo);
router.put('/', equiposController.actualizarEquipo);
router.delete('/:id', equiposController.eliminarEquipo);

module.exports = router;