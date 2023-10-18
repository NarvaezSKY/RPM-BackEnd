import mongoose from "mongoose";

export const conectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://yecidp21:1234@cluster-rpm.iuvi4uz.mongodb.net/');
        console.log('db is conected')
    }catch(err){
    console.error(err);
    }
    }