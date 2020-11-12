let valoresfila= JSON.parse(window.localStorage.getItem("valoresfila"));
if(valoresfila ==null) valoresfila = [];
let tabla= document.querySelector("#tablaTareas");

let btn= document.querySelector("#btnAdd")
let input= document.querySelector("#inputAdd")
let input2= document.querySelector("#inputAdd2")
let input3= document.querySelector("#inputAdd3")
function addHeaders()
    {
        let fila= document.createElement("tr");
        let enc1= document.createElement("th");
        enc1.innerHTML="Materia";
        let enc2= document.createElement("th");
        enc2.innerHTML="Descripción";
        let enc3= document.createElement("th");
        enc3.innerHTML="Fecha";
        fila.appendChild(enc1);
        fila.appendChild(enc2);
        fila.appendChild(enc3);
        tabla.appendChild(fila);
    }

function hacerTablas(){
tabla.innerHTML="";
addHeaders();
for(info of valoresfila)
{
    let fila= document.createElement("tr");
    for(valor of Object.values(info))
    {
        let celdaNueva = document.createElement("td");
        celdaNueva.innerHTML= valor;
        fila.appendChild(celdaNueva)
    }
    tabla.appendChild(fila);
}

}
function addItem()
{
    let tarea = { materia: input.value, descripcion: input2.value, Fecha:input3.value,}
    valoresfila.push(tarea);
    hacerTablas();
    window.localStorage.setItem("valoresfila", JSON.stringify(valoresfila));
    input.value="";
    input2.value="";
    input3.value="";
}
btn.onclick = addItem;
hacerTablas();
