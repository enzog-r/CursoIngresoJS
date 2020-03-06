function mostrar()
{
    var marca;
    var producto;
    var peso;
    var temperatura;
    var cantidadTempPares = 0;
    var productoMax;
    var productoMin;
    var marcaMax;
    var marcaMin;
    var primeraVez = true;
    var cantidadProductos0Grados = 0;
    var contadorPeso = 0;
    var acumuladorPeso = 0;
    var promedio;
    var pesoPrimeraVez = true;
    var pesoMax;
    var pesoMin;
    var respuesta;

    do
    {
        producto = prompt("Ingrese un producto");

        while(!isNaN(producto))
        {
            producto = prompt("Ingrese un producto");
        }

        marca = prompt("Ingrese su marca:");

        while(!isNaN(marca))
        {
            marca = prompt("Ingrese su marca:");
        }

        peso = prompt("Ingrese un peso (kg) o (gr)");
        peso = parseInt(peso);

        while(peso < 1 || peso > 100)
        {
            peso = prompt("Ingrese un peso (kg) o (gr)");
            peso = parseInt(peso);
        }

        temperatura = prompt("Ingrese una temperatura:");
        temperatura = parseInt(temperatura);

        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Ingrese una temperatura:");
            temperatura = parseInt(temperatura);
        }

        /* a)La cantidad de temperaturas pares*/

        if(temperatura % 2 == 0)
        {
            cantidadTempPares++;
        }
        /* b) La marca del producto más pesado*/
        if(primeraVez)
        {
            primeraVez = false;

            productoMax = producto;
            productoMin = producto;

            marcaMax = marca;
            marcaMin = marca;
        }
        else
        {
            if(marca > marcaMax)
            {
                marcaMax = marca;
                productoMax = producto;
                
            }
            else if (marca < marcaMin)
            {
                marcaMin = marca;
                productoMin = producto;
            }
        }
        /* c) La cantidad de productos 
            que se conservan a menos de 0 grados.*/
        if(temperatura < 0)
        {
            cantidadProductos0Grados++;
        }
        
        /* d) El promedio del peso de todos los productos.*/
        
        contadorPeso++;
        acumuladorPeso += peso;

        /* e) El peso máximo y mínimo.*/
        if(pesoPrimeraVez)
        {
            pesoPrimeraVez = false;

            pesoMax = peso;
            pesoMin = peso;
        }
        else
        {
            if(peso > pesoMax)
            {
                pesoMax = peso;
            }
            else if(peso < pesoMin)
            {
                pesoMin = peso;
            }
        }

        respuesta = confirm("Desea seguir ingresando?");

    }while(respuesta)

    promedio = acumuladorPeso / contadorPeso;

    document.write("Cantidad de temperaturas pares: " + cantidadTempPares + "<br>");
    document.write("Marca del producto más pesado: " + marcaMax + "<br>");
    document.write("Cantidad de productos que se conservan a menos de 0 grados: " + cantidadProductos0Grados + "<br>");
    document.write("Promedio del peso de todos los productos: " + promedio + "<br>");
    document.write("El peso máximo: " + pesoMax + " el peso mínimo: " + pesoMin + "<br>");
}
