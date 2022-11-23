
const mongoose=require('mongoose')

const URIBD='mongodb://127.0.0.1:27017/marcadores'
//'mongodb://localhost:27017/marcadores'

module.exports=()=>{
    const conn=()=>{
        //conectar a la red
        mongoose.connect(
            URIBD,{

                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
            },
            (err)=>{
                if(err){
                    console.log('*** ERROR DE CONEXION *** '+err)
                }
                else{
                    console.log('*** CONEXION ESTABLECIDA  ***')
                }
            }
        )
    }
    conn()
}


