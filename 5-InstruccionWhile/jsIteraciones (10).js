function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var sumaPositivos= 0;
	var sumaNegativos= 0;
	var contadorNumerosPares= 0;
	var contadorDeCeros=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var respuesta=true;

	while(respuesta)
	{
		/*var numero = prompt("Ingrese un numero");

		numero =parseInt(numero);

		while(isNaN(numero))
		{
			numero= prompt("Error, ingrese un numero valido");

			numero = parseInt(numero);
		}*/
		do
		{
			numero = prompt("Ingrese un numero");

			numero = parseInt(numero);
			
		}while(isNaN(numero));
		
		if(numero > 0)
		{	//punto 2
			sumaPositivos += numero;
			//punto 3
			contadorPositivos++;
			//punto 7
			
		}
		else if(numero < 0)
		{	//punto 1
			sumaNegativos += numero;
			//punto 4
			contadorNegativos++;
			//punto 8
			
		}
		else
		{	//punto 5
			contadorDeCeros++;
		}
		if(numero % 2== 0)
		{	//punto 6
			contadorNumerosPares++;
		}

		respuesta = confirm("Desea continuar???")
		
	
	}
	//punto 7
	promedioPositivos = sumaPositivos/contadorPositivos;

	//punto 8
	promedioNegativos = sumaNegativos/contadorNegativos;

	//punto 9
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;
	//punto 10	
	document.write("Suma de positivos: " + sumaPositivos + "<br>");
	document.write("Suma de negativos: " + sumaNegativos + "<br>");
	document.write("Cantidad de positivos: " + contadorPositivos + "<br>");
	document.write("Cantidad de negativos: " + contadorNegativos+ "<br>");
	document.write("Cantidad de ceros: " + contadorDeCeros +"<br>");
	document.write("Cantidad de numeros pares: " + contadorNumerosPares + "<br>");
	document.write("Promedio de positivos: " + promedioPositivos + "<br>");
	document.write("Promedio de negativos: " + promedioNegativos + "<br>");
	document.write("Diferencia de positivos y negativos: " + diferenciaPositivosNegativos + "<br>");




}//FIN DE LA FUNCIÓN