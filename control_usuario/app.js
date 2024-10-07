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
 
    const usuario =usuarios.find((usuario) => usuario.id==id);

    res.status(200).send(usuario);
}

);
app.listen(3000, ()=>{
    console.log("servidor corriendo en https://localhost:3000");
});