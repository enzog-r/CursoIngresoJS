function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	var dato;

	numero = parseInt(numero);

	while(numero < 0 || numero > 10 || isNaN(numero))
	{
		numero = prompt("Ingrese un numero valido");

		numero = parseInt(numero);

		console.log(numero);
		console.log(isNaN(numero));
	}


}//FIN DE LA FUNCIÓN