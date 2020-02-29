function mostrar()
{   
    var planeta = prompt("Ingrese un planeta del sistema solar");
    while(!isNaN(planeta))
    {
        prompt("ERROR, ingrese un nombre de un planeta");
    
    }
    switch(planeta)
    {
        case "mercurio":
        case "venus":
        {
            alert("acá hace calor");
            break;
        }
        case "tierra":
        {
            alert("acá vivimos");
            break;
        }
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        {
            alert("acá hace más frío");
            break;
        }
    
    
    }
}
