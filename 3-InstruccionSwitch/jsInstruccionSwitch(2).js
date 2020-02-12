function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Julio" :
      case "Agosto" :{
        alert("Abrigate que hace frío");
        break;
    }
    case "Septiembre" :
    case "Octubre" :
    case "Noviembre":
    case "Diciembre" :{
        alert("Ya pasamos el frío, ahora calor!!!");
        break;
    }
    case "Enero":
    case "Febrero" :
    case "Marzo":
    case "Abril" :
    case "Mayo" :
    case "Junio" :{
        alert("Falta para el invierno");
        break;
    }
}


}//FIN DE LA FUNCIÓN