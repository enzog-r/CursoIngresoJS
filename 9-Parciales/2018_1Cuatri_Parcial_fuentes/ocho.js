function mostrar()
{
    var respuesta;
    var letra;
    var numero;
    var cantidadPares = 0;
    var cantidadImpares = 0;
    var cantidadCeros = 0;
    var acumuladorPositivos = 0;
    var contadorPositivos = 0;
    var acumuladorNegativos = 0;
    var primeraVez = true;
    var numeroMinimo;
    var numeroMaximo;
    var letraMinima;
    var letraMaxima;
    var promedio;
    do
    {
        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);

        while(isNaN(numero) || numero < -100 || numero > 100)
        {
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);
        }
        
        letra =prompt("Ingrese una letra");

        while(!isNaN(letra))
        {
            letra = prompt("Ingrese una letra");
        }

        if(numero % 2 == 0)
        {
            cantidadPares++;
        }
        else if(numero != 0)
        {
            cantidadImpares++;
        }
       

        if(numero > 0)
        {
            acumuladorPositivos += numero;
            contadorPositivos++;
        }
        else if(numero < 0)
        {
            acumuladorNegativos += numero;
        }
        else
        {
            cantidadCeros++;
        }

        if(primeraVez)
        {
            primeraVez = false;
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMaxima = letra;
            letraMinima = letra;
        }
        else
        {
            if(numero > numeroMaximo)
            {
                numeroMaximo = numero;
                letraMaxima = letra;
            }
            else if(numero < numeroMinimo)
            {
                numeroMinimo = numero;
                letraMinima = letra;
            }
        }

        
        respuesta = confirm("Desea continuar?");

    }while(respuesta)

    document.write("Cantidad de pares: " + cantidadPares + "<br>");
    document.write("Cantidad de impares: " + cantidadImpares + "<br>");
    document.write("Cantidad de ceros: " + cantidadCeros + "<br>");

    if(contadorPositivos == 0)
    {
        promedio = 0;
    }
    else
    {
        promedio = acumuladorPositivos / contadorPositivos;
    }
    document.write("Promedio de positivos : " + promedio + "<br>");
    document.write("Acumulador de negativos : " + acumuladorNegativos + "<br>");
    document.write("Numero maximo :" + numeroMaximo + " Letra maxima : " +letraMaxima + "<br>");
    document.write("Numero minimo: " + numeroMinimo + " Letra minima : " + letraMinima + "<br>");
}
