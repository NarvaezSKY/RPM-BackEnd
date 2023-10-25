import motos from '../models/motos.model.js';


export const getAllmotos = async (req,res)=>{
    try{
        const allMotos = await motos.find({
            motoviajero: req.user.id
        });
        res.json(allMotos);
    }catch(err){
        res.send({message: err})
    }
}

export const getOneMoto = async (req,res)=>{
    try{
        const moto = await motos.findById(req.params.id)
        res.json(moto)
    }catch(err){
        return res.status(500).json({message: err})
    }
};

export const createMoto = async (req,res)=>{
  try{
    const {nombre_moto,marca_moto,año_moto, placa_moto, cilindraje_moto, consumo} = req.body;
    const newMoto = new motos({
        nombre_moto,
        marca_moto,
        año_moto,
        placa_moto,
        cilindraje_moto,
        consumo,
        motoviajero: req.user.id
        
    })

    const savedMoto = await newMoto.save();
    res.json(savedMoto);
  }catch(err){
    return res.status(500).json({message: 'createMotoNotFund'});
    // console.log(err)
  }
};



export const deleteMoto = async (req,res)=>{
 try{
    const moto =  await motos.findByIdAndDelete(req.params.id)
    if(!moto) return res.status(404).json({message:'No hay motos para eliminar'})
    return res.sendStatus(204);
 }catch(err){
    return res.status(404).json({message:'task not found'})
 }
};

export const updateMoto = async (req,res)=>{
    try{
        const updatedMoto =  await motos.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        if(!updateMoto) return res.status(404).json({message:'task not found'})
        res.json(updatedMoto);
    }catch(error){
        console.log(error)
    }
};

