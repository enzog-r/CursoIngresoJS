function mostrar()
{

	var contador=0;
	var acumulador=0;
	var iteraciones=5;

	while(contador < iteraciones)
	{
		var numero = NaN;

		while(isNaN(numero))
		{
		
		numero = prompt("Ingrese un numero");
		
		numero = parseInt(numero);

		}
		
		contador ++;

        acumulador += numero;

	}
	
	alert("La suma de los numeros es " + acumulador)




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN