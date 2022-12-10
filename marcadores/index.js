const express = require('express');
const servidor = express();
const db = require('./config/db.js');
const cors = require('cors');

const PUERTO = 3000;
const equipoRuta = require('./routers/equiposRouter.js');
const deporteRuta = require('./routers/deportesRouter.js');
const eventoRuta = require('./routers/eventosRouter.js');

servidor.get('/', (req, res) =>  {
    res.send('hello world');
  });

servidor.use(cors());
servidor.use(express.json());
servidor.use('/equipos', equipoRuta);
servidor.use('/deportes', deporteRuta);
servidor.use('/eventos', eventoRuta);

servidor.listen(PUERTO, () => {})

db();