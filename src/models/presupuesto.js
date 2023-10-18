import mongoose  from "mongoose";

const presupuesto = new mongoose.Schema({
    conbustible_presu:{
        type: Number,
        required: true,

    },
    hospedaje_presu:{
        type: Number,
        required: true,
    },
    alimentacion_presu:{
        type: Number,
        required: true,
    },
    otros_presu:{
        type: Number,
        required: true
    },
    // otros_presu:{
    //     type: mongoose.Schema.ObjectId,
    //     ref:'User',
    //     required: true
    // }
},{
    timestamps:true
}
);

export default mongoose.model('Task',presupuesto);