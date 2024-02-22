const usuarios = require('./controllers/usuarios');
const cursos = require('./controllers/cursos')



const express = require ('express');
const mongoose = require ('mongoose');

//conexion a la base de datos de mongodb
mongoose.connect('mongodb://localhost:27017/usercoursesdb', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Conectado a mongoDB...'))
    .catch(err => console.log ('no se pudo conectar con mongoDB..', err));


// middleware
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// end points (recursos)
app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Api REST Ok, y ejecutandose')
})