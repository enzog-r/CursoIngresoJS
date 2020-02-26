function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    var resultado;

    precio = prompt("Ingrese el precio");
    descuento  = prompt("Ingrese el porcentaje de descuento");

    precio = parseInt(precio);
    descuento = parseInt(descuento);

    resultado = precio * descuento / 100;
    resultado = parseInt(resultado);
    precioFinal = precio - resultado;
    document.getElementById("elPrecioFinal").value = precioFinal
}
