const equiposModel = require('../models/equiposSchema.js')

const listarEquipos = async(req, res) => {
    try {
        equipos = await equiposModel.find();
        res.status(200).send(equipos)
    } catch(error) {
        console.log('El error es: ' + error)
    }
}

const obtenerEquipoPorId = async( req, res )=>{
    const id = req.params.id;
    try {
        const respuesta = await equiposModel.findOne({
            '_id': id
        });

        res.status(200).json(respuesta);
    } catch(error) {
        console.log('El error es ' + error)
    }
}

const guardarEquipo = async(req, res) => {
    const nombre = req.body.nombre;
    let respuesta = {};

    const existeEquipo = await equiposModel.findOne({ nombre });

    if(nombre == '') {
        respuesta = { 'msj': 'Error campo vacío'}
        res.status(400).json(respuesta);
        return
    } 
    
    if(existeEquipo) {
        respuesta = { 'msj': 'El equipo ya existe'}
        res.status(400).json(respuesta)
    } else {
        try {
            const equipo = new equiposModel(req.body)
            equipo.save()
            respuesta = { 'msj': 'El equipo se almacenó con éxito'}
            res.status(200).json(respuesta)
        } catch(error){
            console.log(error)
        }
    }
}

const actualizarEquipo = async(req, res) => {
    const {id, nombre} = req.body;
    const existeEquipo = await equiposModel.findOne({ nombre })

    if(id == "") {
        res.status(400).send('El id es requerido')
    }

    if(nombre == "") {
        respuesta = {'msj': 'El nombre es requerido'}
        return res.status(400).send(respuesta)
    } 
        
    if( nombre && existeEquipo) {
        respuesta = { 'msj': 'El equipo ya existe'}
        return res.status(400).json(respuesta)
    } else {
        const equipo = {}
        equipo.nombre = nombre
        const respuesta = await equiposModel.updateOne(
            { _id: id },
            {$set: equipo},
            {new: true}
        )
        res.status(200).send(respuesta)
    }
}

const eliminarEquipo = async(req, res) => {
    const id = req.params.id;

    if(id== "") {
        res.status(400).send('El id es requerido')
    } else {
        const respuesta = await equiposModel.deleteOne(
            {_id: id}
        )
        res.status(200).send({ 'mensaje': "El registro se ha eliminado"})
    }
}

module.exports = { 
    listarEquipos,
    obtenerEquipoPorId,
    guardarEquipo,
    actualizarEquipo,
    eliminarEquipo
}