let x = 4;
let y = 3;
console.log(`x + y = ${x + y}`);

let w;
do{ w = parseFloat(prompt("Ingrese un numero"));} while(Number.isNaN(w)) //parsefloat convierte la cadena de caracteres en un numero decimal
//NaN not a number
//condiicionales, bucles(do while)
console.log(w);
if(w>0)
{
    console.log(`${w} es positivol`)

}
else{
    if(w>0) console.log(`${w} es negativo`)
    else console.log(`${w}es 0`)
}