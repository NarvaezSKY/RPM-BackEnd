import motos from '../models/motos.model.js';
import Task from '../models/motos.model.js'

export const getAllmotos = async (req,res)=>{
    // const {username,password,email} = req.body;
    try{
        const lostal = await motos.find();
        res.json(lostal);
    }catch(err){
        res.send({message:"Sin ti, yo no me siento bien. Na' más de mil en cien. Viviendo y por dentro muerto. Hasta un ciego lo ve"})
    }
}

export const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({
            user: req.user.id
        });
        res.json(tasks)
    }catch(err){
        return res.status(500).json({message: 'Algo salio mal, tal vez fuiste vos del vientre de tu cucha'+`error: ${err}`})
    }
};

export const createTasks = async (req,res)=>{
  try{
    const {nombre_moto,marca_moto,año_moto, placa_moto, cilindraje_moto} = req.body;
    const newTask = new Task({
        nombre_moto,
        marca_moto,
        año_moto,
        placa_moto,
        cilindraje_moto,
        
    })

    const savedTask = await newTask.save();
    res.json(savedTask);
  }catch(err){
    return res.status(500).json({message: 'Algo salio mal, tal vez fuiste vos del vientre de tu cucha'});
  }
};

export const getTask = async (req,res)=>{
 try{
    const task =  await Task.findById(req.params.id).populate('user');
    if(!task) return res.status(404).json({message:'task not found'})
    res.json(task);
 }catch(err){
    return res.status(404).json({message:'task not found'})
 }
};

export const deleteTasks = async (req,res)=>{
 try{
    const task =  await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message:'task not found'})
    return res.sendStatus(204);
 }catch(err){
    return res.status(404).json({message:'task not found'})
 }
};

export const updateTasks = async (req,res)=>{
    try{
        const task =  await Task.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        if(!task) return res.status(404).json({message:'task not found'})
        res.json(task);
    }catch{
        return res.status(404).json({message:'task not found'})
    }
};

