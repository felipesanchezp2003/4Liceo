//event listeners
boton = document.querySelector("#boton1");
parraf = document.querySelector("#miparrafo");
function cambiarcolor()
{
    parraf.style.backgroundColor = "red";
    alert("color cambiado");
}
//al hacer click sobre el boton queremos que se ejecute la funcion cambiar color
//pongo un eventlistener
boton.onclick = cambiarcolor;

