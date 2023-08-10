const {Schema,model} = require('mongoose');

const roleSchema = Schema({
    rol:{
        type:String,
        require: true
    }
})

module.exports = model('Role',roleSchema)