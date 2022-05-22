// importo la clase ServicioReserva
import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReserva {

    constructor() { }

    async buscarTodasReservas(request, response) {
        let servicioR = new ServicioReserva()
        try {

            response.status(200).json({
                mensaje: 'Exito buscando reserva',
                data: await servicioR.buscarTodasReservas(),
                estado: true
            })


        } catch (error) {
            response.status(400).json({
                mensaje: `Oops... ${error}`,
                data: [],
                estado: false
            })
        }
    }

    async buscarReservaPorId(request, response) {
        let id = request.params.id // CAPTURO EL ID QUE LLEGA POR LA URL
        console.log(`El id solicitado es: ${id}`)
        let servicioR = new ServicioReserva() // Se instancia la clase SERVICIO
        try {

            response.status(200).json({
                mensaje: `Exito en la busqueda del id ${id}`,
                data: await servicioR.buscarReservaPorId(id),
                estado: true
            })

        } catch (error) {
            response.status(400).json({
                mensaje: `Oops... ${error}`,
                data: [],
                estado: false
            })
        }
    }

    async registrarReservas(request, response) {
        let datosPeticion = request.body
        console.log(datosPeticion)
        let servicioR = new ServicioReserva() // Se instancia la clase SERVICIO
        try {
            await servicioR.registrarReserva(datosPeticion)
            response.status(200).json({
                mensaje: "Reserva registrada",
                data: datosPeticion,
                estado: true
            })

        } catch (error) {
            response.status(400).json({
                mensaje: `Oops... ${error}`,
                data: [],
                estado: false
            })
        }
    }

    async editarReserva(request, response) {
        let id = request.params.id
        let datosPeticion = request.body
        let servicioR = new ServicioReserva() // Se instancia la clase SERVICIO
        try {
            await servicioR.editarReserva(id, datosPeticion)
            response.status(200).json({
                mensaje: "Reserva editada exitosamente",
                data: null,
                estado: true
            })

        } catch (error) {
            response.status(400).json({
                mensaje: `Oops... ${error}`,
                data: [],
                estado: false
            })
        }
    }

    async eliminarReserva(request, response) {
        let id = request.params.id
        let servicioR = new ServicioReserva() // Se instancia la clase SERVICIO

        try {
            await servicioR.eliminarReserva(id)
            response.status(200).json({
                mensaje: "Reserva eliminada exitosamente",
                data: null,
                estado: true
            })

        } catch (error) {
            response.status(400).json({
                mensaje: `Oops... ${error}`,
                data: [],
                estado: false
            })
        }
    }

}