const { ObjectId } = require('bson');
const eventosModel = require('../models/eventosSchema.js')

const listarEventos = async(req, res) => {
    try {
        eventos = await eventosModel.find();
        res.status(200).send(eventos)
    } catch(error) {
        console.log('El error es: ' + error)
    }
}

const obtenerEventoPorId = async( req, res )=>{
    const id = req.params.id;
    try {
        const respuesta = await eventosModel.findOne({
            '_id': id
        });

        res.status(200).json(respuesta);
    } catch(error) {
        console.log('El error es ' + error)
    }
}

const guardarEvento = async(req, res) => {
    const _equipo1 = req.body._equipo1
    const _equipo2 = req.body._equipo2
    const _deporteId = req.body._deporteId
    const fechaEvento = req.body.fechaEvento
    const marcador1 = req.body.marcador1
    const marcador2 = req.body.marcador2

    let respuesta = {};

    if(!marcador1 || !marcador2) {
        respuesta = { 'msj': 'Todos los datos son requeridos'}
        return res.status(400).json(respuesta);        
    } 

    if(!ObjectId.isValid(_equipo1) || !ObjectId.isValid(_equipo2) || !ObjectId.isValid(_deporteId)) {
        respuesta = { 'msj': 'Debe ser un id válido'}
        res.status(400).json(respuesta)
    } else {
        try {
            const evento = new eventosModel(req.body)
            evento.save()
            respuesta = { 'msj': 'El evento se almacenó con éxito'}
            res.status(200).json(respuesta)
        } catch(error){
            console.log(error)
        }
    }
}

const actualizarEvento = async(req, res) => {
    const id = req.body.id;
    const {_equipo1, _equipo2, _deporteId, fechaEvento, marcador1, marcador2 } = req.body;

  
         if(!ObjectId.isValid(_equipo1) || !ObjectId.isValid(_equipo2) || !ObjectId.isValid(_deporteId)) {
            respuesta = { 'msj': 'Debe ser un id válido'}
            res.status(400).json(respuesta)
        }
         
         // Actualizaciones
         try {
            const evento = {}
            evento._equipo1 = _equipo1
            evento._equipo2 = _equipo2
            evento.fechaEvento = fechaEvento
            evento._deporteId = _deporteId
            evento.marcador1 = marcador1
            evento.marcador2 = marcador2

             const eventoActualizado = await eventosModel.updateOne( 
                {_id: id}, 
                { $set: evento }, 
                { new: true }
             );
     
             return res.json({
                 'msj': 'El evento fue actualizado'
             });
         } catch(error) {
            res.status(400).send({
                'msj': 'El registro no fue actualizado'
            })
         }
    
}

const eliminarEvento = async(req, res) => {
    const id = req.params.id;
    if(id== "") {
        res.status(400).send('El id es requerido')
    } else {
        const respuesta = await eventosModel.deleteOne(
            {_id: id}
        )
        res.status(200).send("El registro se ha eliminado")
    }
}

module.exports = { 
    listarEventos,
    obtenerEventoPorId,
    guardarEvento,
    actualizarEvento,
    eliminarEvento
}