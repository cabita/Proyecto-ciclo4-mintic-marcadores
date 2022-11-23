
const categoriasModel=require('../models/categoriasSchema.js')

 const categoriasListar= async(req, res)=>{
    try{

 const  categorias =await categoriasModel.find()
    res.status(200).send(categorias)
}catch(error){
    console.log('El error es')
}



  //  listado={
    //"1":"futball",
   //"2":"tennis",
   //"3":"basketball",
   //"4":"ciclismo"
   // }
   // return listado
}

const categoriasObtener=async(req,res)=>{
    const id=req.params.id
    console.log(id)
    let c
    if(id==1)
        c= {"1":"futball"}
    if(id==2)
        c= {"1":"tennis"}        
    res.status(200).json(c)
}

const categoriasGuardar=(req,res)=>{
    console.log(req.body);
    const nombre=req.body.nombre
    let respuesta={}
    if(nombre==''){
        respuesta={'msj':'error campo vacío'}
        res.status(400).json(respuesta);
        console.log(respuesta)
    }
    else{
        try{
            const categoria=new categoriasModel(req.body)
            categoria.save()
            respuesta={'msj':'categoria se almacenó con éxito'}
            res.status(200).json(respuesta)
            }
        catch(error){
                console.log('El error '+error)
            }
    }
}

const categoriasActualizar=async(req,res)=>{
    console.log('put:')
    const {id,nombre}=req.body;
    //console.log(req)

    if(id==''){
        res.status(400).send('error por vacío')
    }
    if(nombre!=''){
        const categoria={}
        categoria.nombre=nombre
        const rta = await categoriasModel.updateOne(
            {_id:id},
            {$set:categoria},
            {new:true}
        )
        console.log('categoria actualizada')
        res.status(200).send('Actualizado')
    }        
}

const categoriasEliminar=async(req,res)=>{
    console.log('del'+req.params.id)
    try{

    
    const id=req.params.id
    if(id==''){
        res.status(400).send('error por vacío')
    }

    console.log('El id para eliminar: '+id)
    const rta = await categoriasModel.deleteOne(
         {_id:id}
    )
    console.log(rta)
    console.log('Categoria eliminada')
    res.status(200).send('Eliminado')
    }
    catch(error){
        console.log('El error '+error)
        res.status(400).json({})
    }
}


module.exports={
    categoriasListar,
    categoriasObtener,
    categoriasGuardar,
    categoriasActualizar,
    categoriasEliminar
};