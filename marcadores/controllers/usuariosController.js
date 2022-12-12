const { ObjectId } = require('bson');
const usuariosModel = require('../models/usuariosSchema.js')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usuarioLogin = async(req, res) => {
    const { email, password } = req.body


    if(email) {
        try {
            const usuario = await usuariosModel.findOne({email})
            

            if(!usuario) {
                res.status(400).json({msj: 'El usuario no existe'})
             } 
            
             const validPassword = bcryptjs.compareSync( password, usuario.password );
             
             if ( !validPassword ) {
                 return res.status(400).json({msj: 'Contraseña no válida'});
             } else {
                const payload = {
                    usuario: { id: usuario.id }
                }

                jwt.sign (
                    payload,
                    'secret word key',
                    {
                        expiresIn: 3600
                    },
                    (error, token) => {
                        if(error) throw error 
                        res.status(200).json({token: token, msj: "Login exitoso"})
                    }
                )
            }

        } catch( error) {
            respuesta = { 'msj': 'Error login'}
            return res.status(400).json(respuesta)
        }
    }
}


const registrarUsuario = async(req, res) => {
    const {nombreCompleto, username, email, password } = req.body;

    let respuesta = {};

    const existeEmail = await usuariosModel.findOne({ email })
    if( email && existeEmail) {
        respuesta = { 'msj': 'El email ya se encuentra registrado'}
        return res.status(400).json(respuesta)
    }
        try {
            const usuario = new usuariosModel(req.body)
            const salt = bcryptjs.genSaltSync();
            usuario.password = bcryptjs.hashSync( password, salt );

            usuario.save()
            respuesta = { 'msj': 'El usuario se ha registrado con éxito'}
            res.status(200).json(respuesta)
        } catch(error){
            console.log(error)
        }
}


module.exports = { 
    registrarUsuario,
    usuarioLogin
}