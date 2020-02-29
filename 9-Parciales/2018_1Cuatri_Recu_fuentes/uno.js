/*b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/

function mostrar()
{
    var nombre;
    var formaDePago;
    var respuesta = true;
    var cantidadDePersonas;
    var cantidadDeDias;
    var contadorDeReservas;
    var maximoCantidadDePersonas;
    var maximoCantidadDePersonasHuesped;
    var maximoDeDias;
    var maximoDeDiasCantidadPersonas;
    var contadorEfectivo;
    var contadorQR;
    var contadorTarjeta;
    var acumuladorDeDias;
    var promedio;
    var formaDePagoMasUsada;

    contadorEfectivo = 0;
    contadorDeReservas = 0;
    contadorTarjeta = 0;
    contadorQR = 0;
    acumuladorDeDias = 0;

    while(respuesta)
    {
        contadorDeReservas++;
        nombre = prompt("Ingrese su nombre");
        while(!isNaN(nombre))
        {
            nombre = prompt("ERROR, ingrese un nombre valido");
        }
            cantidadDePersonas = prompt("Ingrese la cantidad de personas");
            cantidadDePersonas = parseInt(cantidadDePersonas);

            while(isNaN(cantidadDePersonas) || cantidadDePersonas < 1)
            {
                cantidadDePersonas = prompt("Error, ingrese una cantidad valida");

                cantidadDePersonas = parseInt(cantidadDePersonas);
            }     
    
            cantidadDeDias = prompt("Ingrese la cantidad de dias de su estadía");

            cantidadDeDias = parseInt(cantidadDeDias)

            while(isNaN(cantidadDeDias)|| cantidadDeDias < 1)
            {
                cantidadDeDias = prompt("Error, ingrese una cantidad valida");

                cantidadDeDias = parseInt(cantidadDeDias);
            }

           
    
        formaDePago = prompt("Forma de pago");

        while(!isNaN(formaDePago)|| formaDePago != "efectivo" && formaDePago != "tarjeta" && formaDePago != "qr")
        {
            formaDePago = prompt("forma de pago");        
        }
        if(contadorDeReservas == 1 || maximoCantidadDePersonas < cantidadDePersonas)
        {
            maximoCantidadDePersonas = cantidadDePersonas;
            maximoCantidadDePersonasHuesped = nombre;
        }
        if(contadorDeReservas == 1 || maximoDeDias < cantidadDeDias)
        {
            maximoDeDias = cantidadDeDias;
            maximoDeDiasCantidadPersonas = cantidadDePersonas;
        }
        switch(formaDePago)
        {
            case "qr":
            contadorQR = contadorQR +1;
                break;

            case "efectivo":
            contadorEfectivo++;
                break;

            default:
            contadorTarjeta++;
                break
        }
        acumuladorDeDias = acumuladorDeDias + cantidadDeDias;

        respuesta = confirm("quiere seguir ingresando?");
    }
    promedio = acumuladorDeDias/contadorDeReservas;

    if(contadorQR > contadorEfectivo && contadorQR > contadorTarjeta)
    {
        formaDePagoMasUsada = "qr";
    }
    else if (contadorTarjeta > contadorEfectivo)
    {
        formaDePagoMasUsada = "tarjeta";
    }
    else
    {
        formaDePagoMasUsada = "efectivo";
    }
    
    document.write("Usted trajo a " + cantidadDePersonas + " personas en una sola reserva <br>")
    document.write("las personas que se quedaron más días son: " + maximoCantidadDePersonas + "<br>")
    document.write("la forma de pago más utilizada fue:" + formaDePagoMasUsada + "<br>")
    document.write("El promedio de cantidad de días por reserva fue:" + promedio + "<br>")
}
