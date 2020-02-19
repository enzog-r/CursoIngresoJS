function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var salir = false;

	while(true)
	{
		var numero = prompt("Ingrese un numero");

		if(numero == "q")
		{
			salir = true
		}
		numero = parseInt(numero);	

		while(isNaN(numero))
		{
			numero = prompt("Error ingrese un numero valido");

			if(numero == "q")
			{
				salir = true;
				break;
			}

			numero = parseInt(numero);
		}

		if(salir)
		{
			salir = true;
			break;
		}
		contador++;

		acumulador +=numero;

	}

	console.log("La suma de los numeros es " + acumulador);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN