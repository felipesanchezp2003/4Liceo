let grafico1 = document.querySelector("#miPrimerGrafico");
//vamos a graficar la función 8*sin(x)
//debo generar un objeto que tenga los valores de la x y los valores de las y 
//voy a graficar entre 0 y 2*pi, 200 puntos   
let x = []
let y= []
let paso = (2*Math.PI-0)/200
for(let xV= 0; xV<=2*Math.PI; xV += paso)
{
    x.push(xV)
    y.push( 8*Math.sin(xV));
}
Plotly.newPlot( grafico1, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] },{x: x, y: y}], {
    margin: { t: 0 } } );
    
        //newPlot requiere varios argumentos:
        //elemento de html en el que se va a graficar. div