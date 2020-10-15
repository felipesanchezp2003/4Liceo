encabezado = document.querySelector("h1")//ducument selecciona tod la pagina
console.log(encabezado)
texto=prompt("Ingrese el texto que quiere en el encabezado");
//inner.HTML es el texto que esta dentro del objeto
encabezado.innerHTML= texto;
//backkgroundColor corresponde al color del fondo
color = prompt("Ingrese el color del fondo")
//para acceder a las propiedades se pone el nombre y .
//al encabezado le quiero cambiar el estilo(propiedad) y dentro de ese la bacgroundcolor(otra propiedad)
encabezado.style.backgroundColor = color;
body=document.querySelector("body")
body.style.backgroundColor= color;
