const Level = require('../models/Level.js');

const getLevels = async (req,res) =>{
    try {
        const level = await Level.find();
    res.json({
        level
    })
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los niveles' });
    }
}

const getLevel = async (req,res) =>{
    try {
        const level = await Level.findById(req.params._id);
        if (!level) {
            return res.status(404).json({ message: 'Nivel no encontrado' });
        }
        res.json(level)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el nivel' });
    }
} 

const postLevel = async (req,res) =>{
    const {nombre, ruta, duracion} = req.body;

    try {
        const levelData = new Level({
            nombre,
            ruta,
            duracion
        })

        const level =  await levelData.save();
        
        res.json(level)
    
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el nivel' });
    }
}

const updateLevel = async (req,res) =>{
    const {id} = req.params
    const {nombre, ruta, duracion} = req.body;
    try {
        const UpdateData = new Level({ 
            nombre,
            ruta,
            duracion
        });

        const levelUpdate = await Level.findByIdAndUpdate(id,UpdateData,{new:true});
        if (!levelUpdate) {
            return res.status(404).json({ message: 'Nivel no encontrado' });
        }

        res.json(levelUpdate);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el nivel' });
    }
}

const deleteLevel  = async (req,res) =>{
    const {id} = req.params
    try {
        const BorrarLevel = await Level.findByIdAndUpdate(id,{estado:false},{new:true});
        if (!BorrarLevel) {
            return res.status(404).json({ message: 'Nivel no encontrado' });
        }
        res.json({ message: 'Nivel eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el nivel' });
    }
}
 
module.exports = {
    getLevel,
    getLevels,
    postLevel,
    updateLevel,
    deleteLevel

}