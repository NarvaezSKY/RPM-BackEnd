import { ObjectId } from "mongodb";
import mongoose  from "mongoose";

const motos = new mongoose.Schema({
    nombre_moto:{
        type: String,
        required: false,
        default: "Mi moto"
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
        type:String,
        required: true,
        unique: true
    },
    cilindraje_moto:{
        type: Number,
        required: true
    },
    consumo:{
        type: Number,
        default: 0
    },
    motoviajero:{
        type: mongoose.Schema.ObjectId,
        ref:'motoviajero',
        required: true
    },
    isSelected: {
        type: Boolean, default: false 
    }
},{
    timestamps:false
}
);

export default mongoose.model('motos',motos);