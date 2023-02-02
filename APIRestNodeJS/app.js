let express = require('express');
let mysql = require('mysql');

//creamos el objeto de express
let app = express();


//creamos la conexion con mysql y la añadimos a una variable:

let conexion = mysql.createConnection({      //aqui solo van los datos de la basde datos

            host:'localhost',
            user:'root',
            password:'',  //probamos la conexion con una contraseña y vemos el error, la quitamos probamos y aparece conexion existosa
            database:'articuloscrudvanilla'

});

//empezamos con las rutas, la primera la de la raíz
app.get('/',function(req,res){
    res.send('Ruta INICIO')
})

//creamos variable entorno puerto:

let puerto = process.env.PUERTO || 3000; // no me funciona cambiando el puerto por 3000 y configurandolo con set PUERTO=
        //al ponerle || le digo que si el puerto que seteo no va , que lo tire por el 3000

app.listen(puerto, function(){

    console.log("servidor ok en puerto: "+ puerto)

}); //normalmente se usa puerto 3000,pero el que queramos usando set y despues de crear la vriable de entorno


//probamos la conexion:
conexion.connect(function(error){

    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }

})