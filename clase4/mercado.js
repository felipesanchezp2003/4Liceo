// como hacer una lista en js a partir de un array
let compras= ["Arroz", "Lentejas", "Papas"];
let lista = document.querySelector("#listaMercado");
//opcion1 crear for como en c
//compras.length me dice cuantas cosas hay dentro del array
// for(let i=0; i<compras.length; i++)
// {
//     //creo elemento y entre parentesis pongo que elemento
// let elemento= document.createElement("li")
// //le pongo addentro de la lista el elemento, por eso es child
// elemento.innerHTML = compras[i];
// lista.appendChild(elemento);
// }
//opción2, for of
//se hace lo mismo para cada uno de los elementos de la lista
//la variable arrocito va a coger el valor de arroz y va a hacer lo que debe hacer, luego toma el valor de lentejas y así
function hacerLista()
{
lista.innerHTML= "";
for(arrocito of compras)
{
    //creo elemento y entre parentesis pongo que elemento
let elemento= document.createElement("li")
//le pongo addentro de la lista el elemento, por eso es child
elemento.innerHTML = arrocito;
lista.appendChild(elemento);
}
}
let input= document.querySelector("#inputAdd")
let btn= document.querySelector("#btnAdd")
function addItem()
{
     //leer el valor que el ususario escribió
     let item = input.value;
    //agregar el item a la lista de
    compras.push(item)
    hacerLista();
    // //leer el valor que el ususario escribió
    // let item = input.value;
    // //crear un nuevo elemento li y poner el valor del texto del elemento li
    // let elemento= document.createElement("li")
    // elemento.innerHTML= item;
    // //poner el elemento li como child de la lista
    // lista.appendChild(elemento);
    // //BORAR LO QUE EL USUSARIO YA ESCRIBIO
    input.value="";
}
btn.onclick = addItem;


