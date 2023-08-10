const {Schema,model} = require('mongoose');

const levelSchema = Schema({
    nombre:{
        type: String,
        required: [true,'nombre es obligatorio']
    },
    ruta:{
        type:Schema.Types.ObjectId,
        required: [true,'ruta es obligatorio']
    },
    duracion:{
        type:String,
        required: [true,'duracion es obligatorio']
    }
})

module.exports = model('Level', levelSchema)