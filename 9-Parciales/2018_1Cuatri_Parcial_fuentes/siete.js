function mostrar()
{   var contador = 0;
    var iteraciones = 5; 
    var contadorNotas = 0;
    var acumuladorNotas = 0;
    var nota;
    var primeraVez = true;
    var notaMax;
    var notaMin;
    var sexoMax;
    var sexoMin;
    var sexo;
    var promedio;
    var cantidadVarones = 1;

    while(contador < iteraciones)
    {      
            nota = prompt("Ingrese una nota");
            nota = parseInt(nota);

        while(isNaN(nota) && nota < 0 || nota > 10)
        {
            nota = prompt("ERROR, Ingrese una nota valida");
            nota = parseInt(nota);
        }

     contadorNotas++;
     acumuladorNotas += nota;

        sexo = prompt("Ingrese su sexo (f) o (m)");   

        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("ERROR, ingrese un sexo que sea (f) o (m)");
        }

     /* b)La nota más baja y el sexo de esa persona.*/

     if(primeraVez)
     {
         primeraVez = false

         notaMax = nota;
         notaMin = nota;

         sexoMax = sexo;
         sexoMin = sexo;
     }
     else 
     {  
        if(nota > notaMax)
        { 
         notaMax = nota;
         sexoMax = sexo;
       }
       else if(nota < notaMin)
       {
           notaMin = nota;
           sexoMin = sexo;
       }

       if(nota >= 6 && sexo == "m")
       {
            cantidadVarones++;
       }

     }

     contador++;

    } 

    /* a) El promedio de las notas totales.*/

    promedio = acumuladorNotas / contadorNotas;

    promedio = alert("El promedio de las notas es: " + promedio);

    alert("La nota mas baja es: " + notaMin + " y el sexo es: " + sexoMin);

    alert("Cantidad de varones que su nota es igual o mayor a 6: " + cantidadVarones);

    }
