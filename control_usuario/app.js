const express = require("express");

const app = express();

const usuarios = [
    {
        id: 1,
        nombre: "Almir",
        apellido: "Cortes",
        email: "ajcc03@gmail.com",
    },
    {
        id: 2,
        nombre: "Jose",
        apellido: "Cruz",
        email: "Jacc02@gmail.com",
    },
   ];
app.get("/usuarios", (req, res)=>{
   res.status(200).send(usuarios);
});

app.get("/usuarios/:id", (req, res)=>{
    const {id}=req.params;
    
    if (isNaN(id)){
        res.status(400).send({error:"El id debe ser un numero"});
        return;
    };

    const usuario =usuarios.find((usuario) => usuario.id==id);

    if(usuario === undefined){
        res.status(404).send({error:`El usuario con id ${id}no existe`});
        return;
    }

    res.status(200).send(usuario);
}



);
app.listen(3000, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});