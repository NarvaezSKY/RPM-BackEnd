

import motoviajero from "../models/motoviajeros.models.js";



export const getAllMotoviajeros= async(req, res)=>{

    try {
        const allMotoviajeros= await motoviajero.find()
        res.json(allMotoviajeros)

        
    } catch (error) {
        console.log(error)
        
    }
}

export const createMotoviajero= async(req, res)=>{

    const {alias_mv, nombre1_mv,nombre2_mv,ape1_mv,ape2_mv,nacionalidad,genero,celular_mv,fecha_na_mv,link_redso,nom_redso,numero_id }= req.body

    try {
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
            numero_id
    
    
        })
        const hola= newMotoviajero.save()
        res.json({message: 'usuario creado'})
        
    } catch (error) {
        console.log(error)
        
    }

}

export const updateMotoviajero = async (req, res)=>{
    
    try {
        const upmotoviajero= motoviajero.findByIdAndUpdate(req.params.id, req.body)
        res.json({message: 'Motoviajero Actualizado'})
    } catch (error) {
        console.log(error)
        
    }


}




export const getMotoviajero = async (req, res) => {
    try {
        const motoviajero = await Motoviajero.findById(req.params.id).populate('motoviajero');
        res.json(motoviajero);
    } catch (error) {
        res.json({ error });
    }
}

export const deleteMotoviajero = async (req, res) => {
    try {
        const motoviajero = await Motoviajero.findByIdAndDelete(req.params.id, req.body, {
            new: true
        });
        res.json({ message: 'Motoviajero eliminado' });
    } catch (error) {
        res.json({ error });
    }
}



