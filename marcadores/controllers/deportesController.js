const deportesModel = require('../models/deportesSchema.js')

const listarDeportes = async(req, res) => {
    try {
        deportes = await deportesModel.find();
        res.status(200).send(deportes)
    } catch(error) {
        console.log('El error es: ' + error)
    }
}

const obtenerDeportePorId = async( req, res )=>{
    const id = req.params.id;
    try {
        const respuesta = await deportesModel.findOne({
            '_id': id
        });

        res.status(200).json(respuesta);
    } catch(error) {
        console.log('El error es ' + error)
    }
}

const guardarDeporte = async(req, res) => {
    const nombre = req.body.nombre;
    let respuesta = {};

    const existeDeporte = await deportesModel.findOne({ nombre });
    
    if(nombre == '') {
        respuesta = { 'msj': 'Error campo vacío'}
        return res.status(400).json(respuesta);        
    } 
    
    if(existeDeporte) {
        respuesta = { 'msj': 'El deporte ya existe'}
        return res.status(400).json(respuesta)
    } else {
        try {
            const deporte = new deportesModel(req.body)
            deporte.save()
            respuesta = { 'msj': 'El deporte se almacenó con éxito'}
            res.status(200).json(respuesta)
        } catch(error){
            console.log(error)
        }
    }
}

const actualizarDeporte = async(req, res) => {
    const {id, nombre} = req.body;    
    const existeDeporte = await deportesModel.findOne({ nombre })
    

    if(id == "") {
        respuesta = {'msj': 'El id es requerido'}
        return res.status(400).send(respuesta)
    }

    if(nombre == "") {
        respuesta = {'msj': 'El nombre es requerido'}
        return res.status(400).send(respuesta)
    } 
        
    if( nombre && existeDeporte) {
        respuesta = { 'msj': 'El deporte ya existe'}
        return res.status(400).json(respuesta)
    } else {
        const deporte = {}
        deporte.nombre = nombre
        const respuesta = await deportesModel.updateOne(
            { _id: id },
            {$set: deporte},
            {new: true}
        )
        return res.status(200).send({'msj': 'Actualizado'})
    }
}

const eliminarDeporte = async(req, res) => {
    const id = req.params.id;

    if(id== "") {
        respuesta = {
            'msj': 'El id es requerido'
        }
        return res.status(400).send(respuesta)
    } else {
        const respuesta = await deportesModel.deleteOne(
            {_id: id}
        )
        res.status(200).send("El registro se ha eliminado")
    }
}

module.exports = { 
    listarDeportes,
    obtenerDeportePorId,
    guardarDeporte,
    actualizarDeporte,
    eliminarDeporte
}