import { Schema, model } from "mongoose";
import { string } from "zod";

const motoviajeroShema= new Schema({
    alias_mv:{
        type: String
    },
    nombre1_mv:{
        type: String,
        required: true
    },
    nombre2_mv:{
        type: String
    },
    ape1_mv: {
        type: String,
        required: true
    },
    ape2_mv:{
        type: String

    },
    nacionalidad: {
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    celular_mv:{
        type: Number,
        required: true
    },
    fecha_na_mv:{
        type: String,
        required: true
    },
    link_redso:{
        type: String
    },
    nom_redso:{
        type: String
    },
    numero_id:{
        type: Number
    }




})

export default model('motoviajero', motoviajeroShema)