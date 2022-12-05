const mongoose = require('mongoose');

const URIBD = 'mongodb://127.0.0.1:27017/marcadores';

module.exports = () => {
    const conn = () => {
        mongoose.connect(
            URIBD, {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err) {
                    console.log('error al conectar: ' + error)
                } else {
                    console.log('La conexión es ok')
                }
            }
        )
    }
    conn();
}