export const getMotoviajero= async (req,res) => {
    try {
        const Motoviajero= await Motoviajero.findById(req.params.id).populate('motoviajero')
        res.json(Motoviajero)
    } catch (error) {
        
        res.json({error})
    }
}

export const deleteMotoviajero = async (req, res) => {


    try {
       const Motoviajero= await Motoviajero.findByIdAndDelete(req.params.id, req.body,{
        new:true
        })
        res.json({message:'Motoviajero eliminado'})
       
    } catch (error) {
        res.json({error})
    }
}