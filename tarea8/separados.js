let grafico1 = document.querySelector("#primergrafico");
let x = []
let y= []
let cambio = (5-(-5))/100;
for(let xa= -5; xa<=5; xa += cambio)
{
    x.push(xa)
    y.push(2*(xa)-4);
}
Plotly.newPlot( grafico1, [{x: x, y: y}], {
    margin: { t: 0 } } );
let grafico2 = document.querySelector("#segundografico");
    let t = []
    let k= []
    let cambio2 = (4-(-4))/100;
    for(let ta= -4; ta<= 4; ta += cambio2)
    {
        t.push(ta)
        k.push(6*Math.pow(ta,2)-3*(ta)-8);
    }
    Plotly.newPlot( grafico2, [{x: t, y: k}], {
        margin: { t: 0 } } );
let grafico3 = document.querySelector("#tercergrafico");
let h = []
let p= []
let cambio3 = (7-(-7))/100;
for(let ha= -7; ha<=7; ha += cambio3)
{
    h.push(ha)
    p.push(Math.sin(ha));
}
Plotly.newPlot( grafico3, [{x: h, y: p}], {
    margin: { t: 0 } } );
    
    