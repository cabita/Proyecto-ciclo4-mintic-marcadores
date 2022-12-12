const {mongoose, Schema} = require('mongoose');

const usuariosSchema = new mongoose.Schema(
    {
        nombreCompleto: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        rol: {
            type: String,
            required: true,
            default: 'Gestor de eventos'
        },
        status: {
            type: Boolean,
            required: true,
            default: true
        },
        fechaCreacion: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('usuarios', usuariosSchema)