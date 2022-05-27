// Importando express
import express from 'express';

// Importando los controladores
import { Controlador } from "../controllers/ControladorHabitacion.js"
import { ControladorReserva } from "../controllers/ControladorReserva.js"
// Creamos el objeto para poder utilizar la clase Controlador
let controlador = new Controlador()
let controladorReserva = new ControladorReserva()

// Una variable para almacenar la funcionalidad de express Router
// Que es la que me permite personalizar y separar RUTAS
export let rutas = express.Router()

// DEFINO MIS RUTAS
rutas.get('/API/v1/viernes', controlador.buscarTodos)
rutas.get('/API/v1/viernes/:id', controlador.buscarPorId)
rutas.post('/API/v1/viernes', controlador.insertar)
rutas.put('/API/v1/viernes/:id', controlador.editar)
rutas.delete('/API/v1/viernes/id', controlador.eliminar)

// RUTAS DE RESERVA
rutas.get('/API/v1/reservas', controladorReserva.buscarTodasReservas)
rutas.get('/API/v1/reservas/:id', controladorReserva.buscarReservaPorId)
rutas.post('/API/v1/reservas', controladorReserva.registrarReservas)
rutas.put('/API/v1/reservas/:id', controladorReserva.editarReserva)
rutas.delete('/API/v1/reservas/:id', controladorReserva.eliminarReserva)