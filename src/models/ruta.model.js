import mongoose  from "mongoose";

const rutaSchema = new mongoose.Schema({
    nom_ruta:{
        type: String,
        required: true,
    },
    p_inicio_rut:{
        type: String,
        required: true,
    },
    geo_ini_rut:{
        type: String,
        required: true,
    },
    p_final_rut:{
        type: String,
        required: true,
    },
    geo_fin_rut:{
        type: String,
        required: true,
    },
    descripcion_rut:{
        type: String,
        required: true,
    },
    km_total_rut:{
        type: Number,
        required: true,
    },
    geo_parada:{
        type: String,
        required: true,
    },
    nom_parada:{
        type: String,
        required: true,
    },
    desc_parada:{
        type: String,
        required: true,
    }
},{
    timestamps:true
}
);

export default mongoose.model('Ruta',rutaSchema);