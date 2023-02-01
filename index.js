//definicion de variables:

//const url = "http://127.0.0.1:5500/vanillaCRUD/index.html";
const container = document.querySelector('tbody');
const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));
const formulario = document.querySelector('form'); //al ser el unico podemos usar selector
let resultado = "";//la guardamos para luego
//stock inputs--)descripcion,precio,articulo:

const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');

let opcion= "" //la guardamos par aluego tambien

//quitamos las etiquetas de bootsrap(el boton se abria por bottstrap) lo haremos desde js
let boton = document.getElementById('btnCrear');
/*boton.addEventListener('click', ()=>{

    modalArticulo.show();
})*/
console.log(boton)
