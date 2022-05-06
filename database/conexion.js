// Importo mongoose encargado de crear la conexion
import mongoose from 'mongoose';

export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log('Exito conectandonos con la BD')
    }catch(error){
        console.log(`Fallo en la conexion con BD ${error}`)
    }
}