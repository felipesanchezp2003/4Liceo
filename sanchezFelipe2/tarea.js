boton1 = document.querySelector("#boton1");
boton2 =document.querySelector("#boton2");
boton3 =document.querySelector("#boton3");
parrafo = document.querySelector("#pinteractuar");
function cambiarcolor()
{
    parrafo.style.backgroundColor = "black";
    parrafo.style.color = "white";
    alert("Color del párrafo cambiado")
}
boton1.onclick = cambiarcolor;
function ocultar()
{
    parrafo.style.visibility= "hidden";
    parrafo.style.display= "none";
    alert("Párrafo ocultado")
}
boton2.onclick = ocultar;
function reaparecer()
{
    parrafo.style.visibility= "visible";
    parrafo.style.display= "block";
    alert("Párrafo visible")
}
boton3.onclick = reaparecer;
document.getElementById("imagen1").onmouseover = agregarpadd;
function agregarpadd()
{
    document.getElementById("imagen1").style.padding= "30px";
}
document.getElementById("imagen1").onmouseout = quitarpadd;
function quitarpadd()
{
    document.getElementById("imagen1").style.padding= "10px";
}