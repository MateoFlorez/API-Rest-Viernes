// Importaciones necesarias:

// Importando express
import express from 'express';

// Importando las RUTAS
import {rutas} from '../routes/rutas.js'

// Importando la conexion
import {conectar} from '../database/conexion.js'

// PROGRAMO LA CLASE Servidor
export class Servidor {
    constructor(){
        this.app = express() // Atributo app
        this.conectarConBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()
    }

    // METODOS DEL SERVIDOR (¿QUÉ HACE?)
    despertarServidor(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Servidor encendido: ${process.env.PORT}`)
        })
    }

    enrutarPeticiones(){
        this.app.use('/',rutas)
    }

    // middlewares
    llamarAuxiliares(){
        this.app.use(express.json())
    }

    conectarConBD(){
        conectar()
    }
}