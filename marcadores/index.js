
  const express = require('express')
  const server = express();
  const route=require('./routers/equiposRouter.js');
  const crouter=require('./routers/categoriasRouter.js');
  const db = require('./config/db.js');
  const puerto=3000;
  
  server.get('/', (req, res) => {
      res.send('interfaz home')
    })
  
  //la ruta a los equipo
  server.use(express.json());
  server.use('/equipos',route);
  server.use('/categorias',crouter);
  
  
  server.listen(puerto,function(){
      console.log('servidor activo');
  })
  
  db()



  