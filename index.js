//definicion de variables:

const url = "http://127.0.0.7:5500/NTTDATA/vanillaCRUD/index.html";
const container = document.querySelector('tbody');//le ponemos cantainer porque es donde iremos poniendo los datos
const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));//importante poner el nombre del modal
const formulario = document.querySelector('form'); //al ser el unico podemos usar selector
let resultado = "";//la guardamos para luego
//stock inputs--)descripcion,precio,articulo:

const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');

let opcion= "" //la guardamos par aluego tambien

//quitamos las etiquetas de bootsrap(el boton se abria por bottstrap) lo haremos desde js
let boton = document.getElementById('btnCrear');
boton.addEventListener('click', ()=>{
    modalArticulo.show();
    //limpiamos campos para cada vez que abramos, salga limpio:

    descripcion.value="";
    precio.value="";
    stock.value="";
    opcion = "crear"; //esto no entiendo muuy bien para que es todavía, creo que algo de ,como usamos el mismo form para editar o guardar, con esto el programa lo decidirá..veremos

})
//console.log(boton)


//funcion para mostrar resultados: 


const mostrar = (articulos) => {
    articulos.forEach(articulo => {
        resultado += `
        <tr>
        
            <td>${articulo.id}</td>
            <td>${articulo.descripcion}</td>
            <td>${articulo.precio}</td>
            <td>${articulo.stock}</td>
            <td class="text-center"><a class="btnEditar btn btn-primary">editar</a></td> 
        </tr>
    
    `
    })
    container.innerHTML= resultado;
    
}

//procedimiento mostrar:
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data))
    .catch( error => console.log(error))


