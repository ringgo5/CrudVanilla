let express = require('express');
let mysql = require('mysql');

//creamos el objeto de express
let app = express();

app.listen('3000', function(){

    console.log("servidor ok")

}) //normalmente se usa puerto 3000,pero el que queramos