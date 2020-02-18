function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0;

clave = clave.toLowerCase();

while(clave != "utn750")
{
    contador ++;
    if(contador == 3)
    {
        break;
    }

   clave = prompt("Error, reingrese la clave")

   clave = clave.toLowerCase();
}

if(clave == "utn750"){
    alert("Bienvenido");
}
else
{
    alert("Maximos intentos alcanzados");
}


}//FIN DE LA FUNCIÓN
