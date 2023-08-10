const {Schema,model} = require('mongoose');

const tipoSchema = Schema({
    tipoIdentificacion:{
        type:String,
        require:true
    }
})

module.exports = model('Tipo',tipoSchema);