import mongoose from 'mongoose';

const Schema = mongoose.Schema

const Reserva = new Schema({
    nombre:{
        type:String,
        required:true
    },
    fechaIn:{
        type:Date,
        required:true
    },
    fechaOut:{
        type:Date,
        required:true
    },
    costo:{
        type:Number,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})

export const modeloReserva = mongoose.model('reservas',Reserva)