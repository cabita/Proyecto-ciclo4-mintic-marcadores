const express = require("express");
const router=express.Router();
let categoriasController=require('../controllers/categoriasController.js');

//router.get('/',function(req,res){
//    res.send(categoriasController.categoriasListar());
//})

router.get('/',categoriasController.categoriasListar);
router.get('/:id',categoriasController.categoriasObtener);
router.post('/',categoriasController.categoriasGuardar);
router.put('/',categoriasController.categoriasActualizar);
router.delete('/:id',categoriasController.categoriasEliminar);

module.exports=router;