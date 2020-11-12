let compras= JSON.parse(window.localStorage.getItem("compras"));
//que ocurre si compras no existe en el almacenamiento local?
//hago que si compras sea null asuma el valor de un array vacio, porque si es nulla me falla todo el poblema
if(compras ==null) compras = [];
let lista = document.querySelector("#listaMercado");
function hacerLista()
{
lista.innerHTML= "";
for(arrocito of compras)
{
let elemento= document.createElement("li")
elemento.innerHTML = arrocito;
lista.appendChild(elemento);
}
}
let input= document.querySelector("#inputAdd")
let btn= document.querySelector("#btnAdd")
function addItem()
{
    
     let item = input.value;
    compras.push(item)
    hacerLista();
    window.localStorage.setItem("compras", JSON.stringify(compras));
    input.value= "";
}
btn.onclick = addItem;
hacerLista();
// //El almacenamiento local guarda unicamente cadenas de caracteres o un array
// //window.localStorage.setItem("Curso", "Cuarta")
// let notas = [6, 7, 6, 7, 5, 8, 10]
// //JSON.stringify(notas)
// window.localStorage.setItem("Notas", JSON.stringify(notas))
