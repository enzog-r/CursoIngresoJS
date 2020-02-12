function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Febrero":{
        alert("Tiene 28 días");
        break;
    }
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":{
        alert("Tiene 30 días");
        break;
    }
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":{
        alert("Tiene 31 días");
        break;
    }
}
	
	



}//FIN DE LA FUNCIÓN