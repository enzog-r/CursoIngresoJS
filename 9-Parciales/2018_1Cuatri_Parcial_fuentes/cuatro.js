function mostrar()
{
    var numero1;
    var numero2;
    var suma;
    var resta;
    var resultado;

    numero1 = prompt("Ingrese un numero");
    numero2= prompt("Ingrese otro numero");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if(numero1 == numero2)
    {
        alert("el primer numero " + numero1 + " es igual al segundo numero " + numero2)
    }
    else if(numero1 > numero2)
    {
        resta = numero1 - numero2;
        alert(resta);
    }
    else
    {
        suma = numero1 + numero2;
        alert(suma);
    }
    if(suma > 10)
    {
        alert("la suma es: " + suma + " y superó los 10");
    }
}
