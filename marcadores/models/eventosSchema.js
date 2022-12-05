
const {mongoose, Schema} = require('mongoose');
const equiposSchema = require('./equiposSchema');

const eventosSchema = new mongoose.Schema(
    {
        _equipo1: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: equiposSchema
        },
        _equipo2: {
            type: String,
            required: true,
            trim: true
        },
        _deporteId: {
            type: String,
            required: true,
        },
        fechaEvento: {
            type: Date,
            required: true
        },
        marcador1: {
            type: Number,
            required: true
        },
        marcador2: {
            type: Number,
            required: true
        },
        fechaCreacion: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('eventos', eventosSchema)