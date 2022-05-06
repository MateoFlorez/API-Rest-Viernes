export function buscarTodos(request,response){

    try{

        response.status(200).json({
            mensaje:"Exito en la busqueda",
            data:[{nombre:"Mateo",edad:22},{nombre:"Raquel",edad:22}],
            estado:true
        })

    }catch(error){
        response.status(400).json({
            mensaje:"Oops...",
            data:[],
            estado:false
        })
    }

}

export function buscarPorId(request,response){
    try{

        response.status(200).json({
            mensaje:"Exito en la busqueda del ID",
            data:[{nombre:"Mateo",edad:22},{nombre:"Raquel",edad:22}],
            estado:true
        })

    }catch(error){
        response.status(400).json({
            mensaje:"Oops...",
            data:[],
            estado:false
        })
    }
}

export function insertar(request,response){
    try{

        response.status(200).json({
            mensaje:"Exito insertando dato",
            data:[{nombre:"Mateo",edad:22},{nombre:"Raquel",edad:22}],
            estado:true
        })

    }catch(error){
        response.status(400).json({
            mensaje:"Oops...",
            data:[],
            estado:false
        })
    }
}

export function editar(request,response){
    try{

        response.status(200).json({
            mensaje:"Exito editando dato",
            data:[{nombre:"Mateo",edad:22},{nombre:"Raquel",edad:22}],
            estado:true
        })

    }catch(error){
        response.status(400).json({
            mensaje:"Oops...",
            data:[],
            estado:false
        })
    }
}

export function eliminar(request,response){
    try{

        response.status(200).json({
            mensaje:"Eliminado exitosamente",
            data:[{nombre:"Mateo",edad:22},{nombre:"Raquel",edad:22}],
            estado:true
        })

    }catch(error){
        response.status(400).json({
            mensaje:"Oops...",
            data:[],
            estado:false
        })
    }
}