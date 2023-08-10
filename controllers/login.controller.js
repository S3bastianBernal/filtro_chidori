const {response} = require('express');
const Camper = require('../models/Camper.js');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generateJWT.js');

const login = async (req,res = response)=>{
    const {email, password} = req.body;
    try {
        const camper = await Camper.findOne({email});
        if (!camper) {
            return res.status(400).json({
                msg: "Usuario no es correcto"
            })
        }

        if (!camper.estado) {
            return res.status(400).json({
                msg: "Estado Inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, camper.password);
        if (!validPassword) {
            return res.status(400).json({
                msg:"Password Incorrecto"
            })
        }

        const token = await generateJWT(camper.id)

        res.json({
           camper,
           token
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg:"contacte al servicio tecnico"
        })
    }
}

module.exports = {login}