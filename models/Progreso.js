const {Schema,model} = require('mongoose');

const progresoSchema = Schema({
    levelState:{
        type: String,
        require: true
    }
})

module.exports = model('Progreso',progresoSchema);