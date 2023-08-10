const Camper = require('../models/Camper.js');
const bcryptjs = require('bcryptjs')

const getCampers = async (req,res) =>{
    const {desde=5,hasta=0} = req.query;
    const query = { estado:true };

    const [total,campers] = await Promise.all([
        Camper.countDocuments(query),
        Camper.find(query)
            .populate('level',['nombre'])
            .skip(Number(desde))
            .limit(Number(hasta))
    ])

    res.json({
        total,
        campers,
    })
}

const postCamper = async (req,res) =>{
    const {
        email,
        ...resto
    } = req.body


    const salt = bcryptjs.genSaltSync();
    const contraseña = req.body.contraseña
    const password = bcryptjs.hashSync(contraseña,salt)

    

    const data ={
        email,
        password,
        ...resto,
        
    }

    const camper = new Camper(data);

    await camper.save();

    res.json({
        msg :"datos insertados correcatmente",
        camper
    })
}

const deleteCamper = async (req,res) =>{
    try{
    const {id} = req.params;
    
    const camper = await Camper.findByIdAndUpdate(id, {estado: false},{new: true});

    res.json(camper);

}catch(error){
    res.json(error)
}
}

const putCamper = async (req,res) =>{
    const {id} = req.params;

    const {email,password,...data} = req.body;


    if (password) {
        const salt = bcryptjs.genSaltSync();
        const password = bcryptjs.hashSync(password,salt);
    }

    const CampersDB = Camper.find({email})

    if (CampersDB) {
        return res.state(400).json('Email exitente');
    }

    const camper = await Camper.findByIdAndUpdate(id, data,{new: true});

    res.json({camper});
}

module.exports ={
    getCampers,
    postCamper,
    deleteCamper,
    putCamper
}
