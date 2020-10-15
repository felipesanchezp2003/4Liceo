let nom;
do{nom= prompt("Inserte su nombre");}while(nom.length<=2)
let edad
do{ edad= parseFloat(prompt("Inserte su edad"));} while(Number.isNaN(edad) || edad<=0)
if(edad <= 12 && edad> 0) 
{
    console.log(`hola ${nom}`);
}
else{
    if(edad <= 50 && edad >=13)
    {
        console.log(`buenos días ${nom}`)
    }
    else{
        console.log(`buenos días respetado ${nom}`)
    }
}
