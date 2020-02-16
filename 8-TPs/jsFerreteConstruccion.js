/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var totalDeAlambre;
    var largo;
    var ancho;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    totalDeAlambre = (largo * 2 + ancho * 2) * 3;

    alert("Cantidad: "+ totalDeAlambre)

    

}
function Circulo () 
{
    var radio;
    var totalDeAlambre;

    radio = document.getElementById("Radio").value;

    radio = parseInt(radio);

    totalDeAlambre = 2* Math.PI * radio;
    
    alert(totalDeAlambre);
	
}
function Materiales () 
{
    var totalDeBolsasDeCemento;
    var totalDeBolsasDeCal;
    var largo;
    var ancho;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    totalDeBolsasDeCemento = (largo * ancho) * 2 / 1;
    totalDeBolsasDeCal = (largo * ancho) * 3 / 1;

    alert("La cantidad de bolsas de cemento es " + totalDeBolsasDeCemento + " y la cantidad de bolsas de cal es " + totalDeBolsasDeCal);

}