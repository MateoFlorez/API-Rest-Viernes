import mongoose from 'mongoose';

// Clase para definir el esquema de datos de mi MODELO
const Schema = mongoose.Schema

// Construyo mi ESQUEMA DE DATOS
const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true
    },

    precio:{
        type:Number,
        required:true
    },

    numPersonas:{
        type:Number,
        required:true
    },

    foto:{
        type:String,
        required:true
    }
})

// Creo finalmente el MODELO DE DATOS
export const modeloHabitacion = mongoose.model('habitaciones',Habitacion)