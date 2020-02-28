/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numero;
function ComenzarIngreso () 
{
 	 numero = document.getElementById("numero").value;
    numero = parseInt(numero);

    while(isNaN(numero) || numero < 1)
    {
        numero = document.getElementById("numero").value;
        numero = parseInt(numero);
    }
}
function NumerosPares ()
{
    var contador = 0;
    var contadorPares = 0;
    ComenzarIngreso();
   
    while(contador < numero)
    {
        contador++;

        if(contador % 2 == 0)
        {
            contadorPares++;
            alert(contador);
        }
    }

}
function NumerosImpares ()
{
    var contador = 0;
    var contadorImpares = 0;
    ComenzarIngreso()

    while(contador < numero)
    {
        contador++;

        if(contador % 2 != 0)
        {
            contadorImpares++;
            alert(contador);
        }
    }

}
function NumerosDivisibles ()
{
    var contador = 1;
    var contadorDivisibles = 0;
    ComenzarIngreso();

    while(contador <= 100)
    {
        contador++;

        if(numero % contador == 0)
        {
            contadorDivisibles++;
        }
    }
    alert("Cantidad de numeros divisibles: " + contadorDivisibles);
}
function VerificarPrimo ()
{
    var primo;
    i=0
    primo = true;
    ComenzarIngreso();
    
    for(i = 2;i < numero;i++)
    {
        if(numero % i == 0)
        {
            primo = false;
        }
    }
    if(primo == true)
    {
        alert("El numero " + numero + " es primo");
    }
    else
    {
        alert("El numero " + numero + " no es primo");
    }
}
function NumerosPrimos ()
{
    var contador = 0;
    var contadorPrimos = 0;
    ComenzarIngreso();

    while(contador <= 100)
    {
        contador++;
        
        if(numero % contador == 0)
        {
            contadorPrimos++;
        }
    }
    alert("Cantidad de numeros primos: " + contadorPrimos);
}



