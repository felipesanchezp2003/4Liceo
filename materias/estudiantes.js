// nombres: string
// apellidos: string
// curso:string
// notas: array de floats
let estudiantes= [{ nombres:" Pedro Antonio", apelllidos:"Perez Rodriguez", edad:45, curso:"Seconda", notas: [6.7, 9.4, 7.3, 4.5, 6.8],},{ nombres:" Juan Antonio", apelllidos:"Gomez Perez", edad:54, curso:"Prima", notas: [6.7, 9.4, 7.3, 4.5, 6.8],},{ nombres:" Marcos Juan", apelllidos:"Gonzales Duarte", edad:6, curso:"Quarta", notas: [6.7, 9.4, 7.3, 4.5, 6.8],}]

let tabla= document.querySelector("#tablaEstudiantes");
// let juan = estudiantes[1];
// let fila = document.createElement("tr");
// let dato1= document.createElement("td");
// dato1.innerHTML = juan.nombres;
// fila.appendChild(dato1);
// tabla.appendChild(fila);
// let dato2= document.createElement("td");
// dato2.innerHTML = juan.apelllidos;
// let dato3= document.createElement("td");
// dato3.innerHTML = juan.edad;
// let dato4= document.createElement("td");
// dato4.innerHTML = juan.curso;
// fila.appendChild(dato2);
// fila.appendChild(dato3);
// fila.appendChild(dato4);
// let dato5= document.createElement("td");
// dato5.innerHTML = juan.notas;
// fila.appendChild(dato5);
for(estudiante of estudiantes)
{
    let fila= document.createElement("tr");
    for(valor of Object.values(estudiante))
    {
        let celdaNueva = document.createElement("td");
        celdaNueva.innerHTML= valor;
        fila.appendChild(celdaNueva)
    }
        //juan[propiedad] si propiedad es nombres me va a decir los nombres
    tabla.appendChild(fila);

}