/*Pedir los siguientes datos hasta que el usuario quiera:
 edad(mayores de 18)
 sexo("f" o "m") y 
 pasaje ("urbano", "nacional" o "internacional");

a) El nombre del hombre con pasaje nacional más joven.

b) El sexo y pasaje del pasajero/a más viejo.

c) La cantidad de mujeres con pasaje urbano o nacional.

d) El promedio de edad entre las mujeres.

e) El promedio de edad entre los hombres con pasaje internacional.*/

function mostrar()
{
    var respuesta;
    var nombre;
    var edad;
    var sexo;
    var pasaje;
    var primeraVezHombreNacional = true;
    var edadMaxima;
    var edadMinimaHombreNacional;
    var nombreMinimoHombreNacional;
    var primerVez = true;
    var edadMinima;
    var sexoMinimo;
    var pasajeMinimo;
    var contadorMujeresUrbanoNacional = 0;
    var acumuladorMujeres = 0;
    var contadorMujeres = 0;
    var promedioMujeres;
    var acumuladorHombresInternacional = 0;
    var contadorHombresInternacional = 0;
    var promedioHombresInternacional;
    

    do
    {   
        nombre = prompt("Ingrese su nombre");
        
        while(!isNaN(nombre))
        {
            nombre = prompt("Ingrese su nombre");
        }

        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);

        while(isNaN(edad) || edad < 18)
        {
            edad = prompt("Ingrese su edad");
            edad = parseInt(edad);
        }

        sexo = prompt("Ingrese su sexo");
    
        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Ingrese su sexo");
        }

        pasaje = prompt("Ingrese un pasaje");

        while(pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional")
        {
            pasaje = prompt("Ingrese un pasaje");
        }

        //a) El nombre del hombre con pasaje nacional más joven.
        if(sexo == "m" && pasaje == "nacional")
        {
            if(primeraVezHombreNacional)
            {
                primeraVezHombreNacional = false
                edadMinimaHombreNacional = edad

            } else if(edad< edadMinimaHombreNacional)
            {
                edadMinimaHombreNacional = edad
                nombreMinimoHombreNacional = nombre
            }
        }
        //b) El sexo y pasaje del pasajero/a más viejo.
        if(primerVez)
        {
            primeraVez = false;

            edadMinima = edad;
            sexoMinimo = sexo;
            pasajeMinimo = pasaje;
        }
        else if(edad < edadMinima)
        {
            edadMinima = edad;
            sexoMinimo = sexo;
            pasajeMinimo = pasaje;
        }
        
        //c) La cantidad de mujeres con pasaje urbano o nacional.
        if(sexo == "f" && (pasaje == "nacional" || pasaje == "urbano"))
        {
            contadorMujeresUrbanoNacional++;
        }

        //d) El promedio de edad entre las mujeres.
        if(sexo == "f")
        {
            acumuladorMujeres+= edad;
            contadorMujeres++;
        }

        //e) El promedio de edad entre los hombres con pasaje internacional.

        if(sexo == "m" && pasaje == "internacional")
        {
            acumuladorHombresInternacional += edad;
            contadorHombresInternacional++;
        }

             

        respuesta = confirm("Quiere seguir ingresando?");
    }while(respuesta)
    //promedio Mujeres
    if(contadorMujeres > 0)
    {
        promedioMujeres = acumuladorMujeres / contadorMujeres;
    } 
    else 
    {
        promedioMujeres = 0;
    }
    //promedio Hombres Internacional
    if(contadorHombresInternacional > 0)
    {
        promedioHombresInternacional = acumuladorHombresInternacional /contadorHombresInternacional
    }
    else
    {
        promedioHombresInternacional = 0
    }
    document.write("Hombre con pasaje nacional mas joven :" + nombreMinimoHombreNacional + edadMinimaHombreNacional + "<br>")
}
