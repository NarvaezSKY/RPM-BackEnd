import { ObjectId } from "mongodb";
import mongoose  from "mongoose";

const motos = new mongoose.Schema({
    nombre_moto:{
        type: String,
        required: false,
    },
    marca_moto:{
        type: String,
        required: true,
    },
    año_moto:{
        type: Number,
        required: true,
    },
    placa_moto:{
        type: mongoose.Schema.ObjectId,
        required: true,
        unique: true
    },
    cilindraje_moto:{
        type: Number,
        required: true
    },
},{
    timestamps:true
}
);

export default mongoose.model('motos',motos);