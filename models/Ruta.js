const {Schema,model} = require('mongoose');

const rutaSchema = Schema({
    nombre:{
        type: String,
        required: [true,'nombre es obligatorio']
    },
    centro:{
        type: Schema.Types.ObjectId,
        ref: 'Centro'
    }
})

module.exports = model('Ruta', rutaSchema);
