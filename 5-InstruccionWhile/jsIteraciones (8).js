function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta = true;
	var acumulador;
	
	var respuesta='si';

	while(respuesta)
	{   
		
		var numero = prompt("Ingrese un numero");

		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Error, ingrese un numero valido");
			numero = parseInt(numero);
		}

		if(numero >= 0)
		{
			positivo += numero;
		}
		else
		{
			negativo *= numero;
		}
		
		respuesta = confirm("Desea continuar?");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN