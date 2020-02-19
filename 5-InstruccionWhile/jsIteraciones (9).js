function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo = 0;
	var minimo = 0;
	var respuesta=true;
	var primerVez=true;

	while(respuesta)
	{
		var numero = prompt("Ingrese un numero");

		numero =parseInt(numero);

		while(isNaN(numero))
		{
			numero= prompt("Error, ingrese un numero valido");

			numero = parseInt(numero);
		}
		if(primerVez)
		{
			primerVez = false;

			maximo = numero;
			minimo = numero;
		}
		else if(numero > maximo)
		{
			maximo = numero;
		}
		if(numero < minimo)
		{
			minimo = numero;
		}
		respuesta = confirm("Desea continuar???");
	
	}
	document.getElementById("maximo").value = maximo
	document.getElementById("minimo").value = minimo




}//FIN DE LA FUNCIÓN