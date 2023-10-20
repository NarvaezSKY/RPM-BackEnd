

import motoviajero from "../models/motoviajeros.models.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from '../libs/jwt.js';

export const getAllMotoviajeros= async(req, res)=>{

    try {
        const allMotoviajeros= await motoviajero.find()
        res.json(allMotoviajeros)

        
    } catch (error) {
        console.log(error)
        
    }
}

export const createMotoviajero= async(req, res)=>{

    const {alias_mv, nombre1_mv,nombre2_mv,ape1_mv,ape2_mv,nacionalidad,genero,celular_mv,fecha_na_mv,link_redso,nom_redso,numero_id, email_mv, password_mv }= req.body

    try {


        const passwordHash=  await bcrypt.hash(password_mv, 10)
        const newMotoviajero=   new motoviajero({
            alias_mv,
            nombre1_mv,
            nombre2_mv,
            ape1_mv,
            ape2_mv,
            nacionalidad,
            genero,
            celular_mv,
            fecha_na_mv,
            link_redso,
            nom_redso,
            numero_id,
            email_mv,
            password_mv: passwordHash
    
    
        })
        const motoviajeroSaved= newMotoviajero.save();

        const token= await createAccessToken({id: motoviajeroSaved._id});

        res.cookie('token', token)

        res.json({message: 'usuario creado'})
        
    } catch (error) {
        console.log(error)
        
    }

}

export const login = async (req,res)=> {
    const {email_mv,password_mv} = req.body
    try{

        const userFound = await motoviajero.findOne({email_mv});
        if(!userFound) return res.status(400).json({message: "User not found"})
        const isMatch = bcrypt.compare(password_mv, userFound.password_mv);

        if(!isMatch) return res.status(400).json({message: "incorrect password"});

        const token = await createAccessToken({id:userFound._id});
        res.cookie('token',token);
        res.json({
            id : userFound._id,
            username : userFound.username,
            email_mv : userFound.email_mv,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });

    }catch(err){
        res.status(500).json({message:err.message})
    }
};




export const updateMotoviajero = async (req, res)=>{
    
    try {
        const updatedMotoviajero = await motoviajero.findByIdAndUpdate(req.params.id, req.body, { new: true });

        
        res.json({message: 'Motoviajero Actualizado'})
    } catch (error) {
        console.log(error)
        
    }


}




export const getMotoviajero = async (req, res) => {
    try {
        const motov = await motoviajero.findById(req.params.id)
        res.json(motov);
    } catch (error) {
        res.json({ error });
    }
}

export const deleteMotoviajero = async (req, res) => {
    try {
        const moto = await motoviajero.findByIdAndDelete(req.params.id)
        res.json({ message: 'Motoviajero eliminado' });
    } catch (error) {
        res.json({ error });
    }
}



