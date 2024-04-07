const express = require('express');
const mongoose = require('mongoose');
//dotenv nos sirve para proteger el URL que conecta con la base de datos, ya que es una informacion delicada
require("dotenv").config();
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const bcrypt = require('bcrypt');


const port = process.env.PORT || 3502;

//rutas
app.get('/', (req, res) => {
    res.send("Hola esta es una API!");
});


//mconexion con mongodb atlas
mongoose
    .connect(process.env.MONGODB_URI).
    then(() => console.log("Se ha conectado con la base de datos de MDBA!"))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('el servidor esta escuchando ', port));// se lanza un texto en terminal cuando el puerto escuche


