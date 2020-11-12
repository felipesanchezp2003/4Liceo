let grafico1 = document.querySelector("#grafico");
let x = []
let y= []
let t = []
let h= []
let cambio = (3-(-3))/100;
for(let xa= -3; xa<=3; xa += cambio)
{
    x.push(xa)
    y.push(Math.exp(xa));
    t.push(xa)
    h.push(Math.exp(-xa));

}
Plotly.newPlot( grafico1, [{x: x, y: y},{x: t, y: h}], {
    margin: { t: 0 } } );