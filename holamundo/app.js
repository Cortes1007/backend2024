const tareas=[
    nombre: "Hacer tarea"
    fecha:"20-09-22"
    hecho:true
    {
        nombre:
    }
]

const tareasPorRealizar= tareas.filter(tarea => !tarea.hecho);
console.log(tareasPorRealizar);