const path = require("path");
//!Paquete ntivo
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const {proyectosRoute} = require("./src/routes");

const PORT = process.env.PORT || 4000;

//! Habilitar Archivos Estáticos
//!El express json no funciona para peticiones a través del html form action, para ello se usa de forma nativa el paquete body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./src/public")));


//! Habilitar Template Engine
app.set("view engine", 'pug');
//!Asignar dirección de las vistas
app.set("views", path.join(__dirname, "./src/views"));


//! Rutas
app.use("/", proyectosRoute);

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
});
