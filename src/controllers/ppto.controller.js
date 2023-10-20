import Ppto from '../models/ppto.model.js'

export const getAllPpto = async (req,res)=>{
    // const {username,password,email} = req.body;
    try{
        const lostal = await Ppto.find();
        res.json(lostal);
    }catch(err){
        res.send({message:"Error verifique"})
    }
}

// export const getPptos = async (req,res)=>{
//     try{
//         const pptos = await pptos.find({
//             user: req.user.id
//         }).populate('user');
//         res.json(pptos)
//     }catch(err){
//         return res.status(500).json({message: 'Something went wrong'})
//     }
// };
export const createPptos = async (req,res)=>{
  try{
    const {combustible_presu,hospedaje_presu,alimentacion_presu,otros_presu} = req.body;
    const newPpto = new Ppto({
        combustible_presu,
        hospedaje_presu,
        alimentacion_presu,
        otros_presu,
        // user: req.user.id
    })

    const savedppto = await newPpto.save();
    res.json(savedppto);
  }catch(err){
    return res.status(500).json({message: `algo salio mal revis el sigiente error ->${err}`});
  }
};

export const getPpto = async (req,res)=>{
 try{
    const ppto =  await Ppto.findById(req.params.id)
    if(!ppto) return res.status(404).json({message:'ppto not found'})
    res.json(ppto);
 }catch(err){
    return res.status(404).json({message:'ppto not found'})
 }
};

export const deletePptos = async (req,res)=>{
 try{
    const ppto =  await Ppto.findByIdAndDelete(req.params.id)
    if(!ppto) return res.status(404).json({message:'ppto not found'})
    return res.sendStatus(204);
 }catch(err){
    return res.status(404).json({message:'ppto not found'})
 }
};

export const updatePptos = async (req,res)=>{
    try{
        const ppto =  await Ppto.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        if(!ppto) return res.status(404).json({message:'ppto not found'})
        res.json(ppto);
    }catch{
        return res.status(404).json({message:'ppto not found'})
    }
};
