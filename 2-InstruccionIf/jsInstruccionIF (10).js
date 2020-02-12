function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var max;
	var min;

	max = 11
	min = 1

	numeroRandom = 	Math.floor(Math.random() * (max - min)) + min;

	if(numeroRandom >= 9)
	{              
		alert("EXCELENTE")
	}
	
	else
	{
		if(numeroRandom >= 4)
		{
         alert("APROBO")
		}
		else{
			alert("Vamos, la proxima se puede")
		}
		
	
	}
		
	
	

}//FIN DE LA FUNCIÓN