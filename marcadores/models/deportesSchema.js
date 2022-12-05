const mongoose = require('mongoose');

const deportesSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        fechaCreacion: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('deportes', deportesSchema)