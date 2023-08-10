const {Schema,model} = require('mongoose');

const centroSchema = Schema({
    nombre:{
        type: String,
        required: [true,'nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion es obligatoria']
    },
    estado:{
        type: Boolean,
        default: true
    },
    ciudad:{
        type: String,
        required: [true, 'la ciudad es obligatoria']
    }
})

module.exports = model('Centro', centroSchema);