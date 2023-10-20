import Ruta from "../models/ruta.model.js";

export const getAllRutas = async (req,res)=>{

    try{
        const lostal = await Ruta.find();
        res.json(lostal);
    }catch(err){
        res.send({message:"Sin ti, yo no me siento bien. Na' más de mil en cien. Viviendo y por dentro muerto. Hasta un ciego lo ve"})
    }
   

}

export const getRutas = async (req,res)=>{
    try{
        const Rutas = await Ruta.find({
            motoviajero: req.motoviajero.id
        }).populate('motoviajero');
        res.json(Rutas)
    }catch(err){
        console.log(err);
        return res.status(500).json({message: err});
       
    }
};
export const createRutas = async (req,res)=>{
  try{
    const {nom_ruta,p_inicio_rut,geo_ini_rut,p_final_rut,geo_fin_rut,descripcion_rut,km_total_rut,geo_parada,nom_parada,desc_parada} = req.body;

    const newTask =  new Ruta({
        nom_ruta,
        p_inicio_rut,
        geo_ini_rut,
        p_final_rut,
        geo_fin_rut,
        descripcion_rut,
        km_total_rut,
        geo_parada,
        nom_parada,
        desc_parada,
        motoviajero: req.motoviajero.id
    })

    const savedTask = await newTask.save();
    res.json(savedTask);
  }catch(err){
    console.log(err);
    return res.status(500).json({message: err});
  }
};
export const getRuta = async (req,res)=>{
 try{
    const task =  await Ruta.findById(req.params.id).populate('motoviajero');
    if(!task) return res.status(404).json({message:'ruta no encontrada'})
    res.json(task);
 }catch(err){
    return res.status(404).json({message:'ruta no encontrada'})
 }
};

export const deleteRutas = async (req,res)=>{
 try{
    const task =  await Ruta.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message:'ruta no encontrada'})
    return res.sendStatus(204);
 }catch(err){
    return res.status(404).json({message:'ruta no encontrada'})
 }
};
export const updateRutas = async (req,res)=>{
    try{
        const task =  await Ruta.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        if(!task) return res.status(404).json({message:'ruta no encontrada'})
        res.json(task);
    }catch{
        return res.status(404).json({message:'ruta no encontrada'})
    }
};

