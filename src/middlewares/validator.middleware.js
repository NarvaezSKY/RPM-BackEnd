export const validateSchema = (shema)=>(req,res,next)=>{
  try{
    shema.parse(req.body);
    next()
  }catch(err){
    return res.status(400).json( err.errors.map((err) => err.message))
  }
}