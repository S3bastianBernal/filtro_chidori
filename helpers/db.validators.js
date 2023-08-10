const Role = require('../models/Role.js');
const Tipo = require('../models/Tipo.js');
const Camper = require('../models/Camper.js');
const Progreso = require('../models/Progreso.js');

const validateIndenti = async(tipoIdentificacion = "" ) => {
    const existeIdenti = await Tipo.findOne({tipoIdentificacion});
    if(!existeIdenti){
            throw new Error(`El rol ${tipoIdentificacion} no esta registrado en la base de datos`);
    }
}

const exiteEmail = async(email = "" ) => {
    const existeIdenti = await Camper.findOne({email});
    if(existeIdenti){
            throw new Error(`El email ${email} ya esta registrado en la base de datos`);
    }
}

const existeUser = async(id) => {
    const existeIdenti = await Camper.find({id});
    if(!existeIdenti){
            throw new Error(`El usuario ${id} no esta registrado en la base de datos`);
    }
}


const isValidRole = async(rol= '')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

const isValidProgreso = async(levelState= '')=>{
    const existeLevel = await Progreso.findOne({levelState});
    if(!existeLevel){
            throw new Error(`El Stado ${levelState} no esta registrado en la base de datos`);
    }
}



module.exports = {
    validateIndenti,
    isValidRole,
    exiteEmail,
    existeUser,
    isValidProgreso
}