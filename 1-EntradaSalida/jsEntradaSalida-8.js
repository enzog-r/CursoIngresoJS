/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroDivisor;
    var numeroDividendo;
    var resultado;

    numeroDivisor = document.getElementById("numeroDivisor").value;
    numeroDividendo = document.getElementById("numeroDividendo").value;

    numeroDivisor = parseInt(numeroDivisor);
    numeroDividendo = parseInt(numeroDividendo);

    resultado = numeroDividendo % numeroDivisor;

    alert("el resto es " + resultado)



	
}
