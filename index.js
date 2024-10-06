
const express = require("express");
const fs = require("fs")

//Instanciar Express
const app = express();

//Levantar servidor
app.listen(3000, console.log("¡Servidor encendido!"));

//middleware
app.use(express.json())

//ejecuta el html en el puerto 3000
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

//mostrar las canciones
app.get("/canciones", (req, res) => {
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'));
    res.json(canciones)
})

// guardar cancion
app.post('/canciones', (req, res) => {
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'));
    canciones.push(cancion);
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
    res.send('cancion agregada')
})


// editar cancion

app.put("/canciones/:id", (req, res) => {
    const { id } = req.params
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"))
    const index = canciones.findIndex(p => p.id == id)
    canciones[index] = cancion
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones))
    res.send("Cancion modificada con éxito")
    })


 // eliminar cancion
 
 app.delete("/canciones/:id", (req, res) => {
    const { id } = req.params
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"))
    const index = canciones.findIndex(p => p.id == id)
    canciones.splice(index, 1)
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones))
    res.send("Cancion eliminada con éxito")
    })