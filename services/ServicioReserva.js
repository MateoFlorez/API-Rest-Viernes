// Importando modelo de datos
import { modeloReserva } from "../models/reservaModelo.js";

export class ServicioReserva{

    constructor(){
            
    }

    async buscarTodasReservas(){
      
            let reservas = await modeloReserva.find()
            return reservas
       
    }

    async buscarReservaPorId(id){
      
            let reserva = await modeloReserva.findById(id)
            return reserva
       
    }

    async registrarReserva(datosPeticion){

            let registrarReserva = new modeloReserva(datosPeticion)
            return (await registrarReserva.save())

    }

    async editarReserva(id,datosPeticion){
        
            return (await modeloReserva.findOneAndUpdate(id,datosPeticion))
        
    }

    async eliminarReserva(id){
        
            return (await modeloReserva.findOneAndDelete(id))
        
    }
}