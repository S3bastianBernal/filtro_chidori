const {Schema,model} = require('mongoose');

const camperSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'nombre es obligatorio']
    },
    tipoIdentificacion:{
        type: String,
        required: [true, 'todo es obligatorio']
    },
    NroIdentificacion:{
        type:String,
        required: [true, 'todo es obligatorio']
    },
    email:{
        type:String,
        required: [true, 'todo es obligatorio']
    },
    password:{
        type:String,
        required: [true, 'todo es obligatorio']
    },
    level:{
        type: Schema.Types.ObjectId,
        ref: 'Level'
    },
    levelState:{
        type: String,
        default: "PENDIENTE",
        required: [true, 'todo es obligatorio']
    },
    estado:{
        type:Boolean,
        default: true
    },
    imagen:{
        type:String,
        require: true
    },
    rol:{
        type:String,
        default: "USER"
    },
    promedio:{
        type:String,
        required: [true, 'todo es obligatorio']
    }
})

module.exports = model('Camper',camperSchema)