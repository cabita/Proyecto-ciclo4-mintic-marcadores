const express = require('express');
const usuariosController = require('../controllers/usuariosController.js');
const router = express.Router();



router.post('/', usuariosController.registrarUsuario);
router.post('/login', usuariosController.usuarioLogin);

module.exports = router;