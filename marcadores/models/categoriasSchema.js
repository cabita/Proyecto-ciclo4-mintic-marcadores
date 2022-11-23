const mongoose=require('mongoose')

const categoriasSchema=mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        fcreado:{
            type:Date,
            default:Date.now()
        }

    }

)

module.exports=mongoose.model('categorias',categoriasSchema)