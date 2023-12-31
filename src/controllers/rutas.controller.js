import Ruta from "../models/ruta.model.js";

export const getAllRutas = async (req,res)=>{

    try{
        const rutasUsuario = await Ruta.find({
            motoviajero: req.user.id
        }). populate('motoviajero')
        res.json(rutasUsuario);
    }catch(err){
        res.send(err)
    }
   

}

// export const getRutas = async (req,res)=>{
//     try{
//         const Rutas = await Ruta.find({
//             motoviajero: req.user.id
//         }).populate('motoviajero');
//         res.json(Rutas)
//     }catch(err){
//         console.log(err);
//         return res.status(500).json({message: err});
       
//     }
// };
export const createRutas = async (req,res)=>{
  try{
    const {nom_ruta,p_inicio_rut,geo_ini_rut,p_final_rut,geo_fin_rut,descripcion_rut,km_total_rut,geo_parada,nom_parada,desc_parada} = req.body;

    const newRuta =  new Ruta({
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
        motoviajero: req.user.id   //user por que se esta pasando user de la validacion del token 
    })

    const savedRuta = await newRuta.save();  
    res.json(savedRuta);
  }catch(err){
    console.log(err);
    return res.status(500).json({message: err});
  }
};
export const getRuta = async (req,res)=>{
 try{
    const ruta =  await Ruta.findById(req.params.id).populate('motoviajero');
    if(!ruta) return res.status(404).json({message:'ruta no encontrada'})
    res.json(ruta);
 }catch(err){
    return res.status(404).json({message:'ruta no encontrada'})
 }
};

export const deleteRutas = async (req,res)=>{
 try{
    const ruta =  await Ruta.findByIdAndDelete(req.params.id)
    if(!ruta) return res.status(404).json({message:'ruta no encontrada'})
    return res.sendStatus(204);
 }catch(err){
    return res.status(404).json({message:'ruta no encontrada'})
 }
};
export const updateRutas = async (req,res)=>{
    try{
        const rutaActualizada =  await Ruta.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        if(!rutaActualizada) return res.status(404).json({message:'ruta no encontrada'})
        res.json(rutaActualizada);
    }catch{
        return res.status(404).json({message:'ruta no encontrada'})
    }
};

