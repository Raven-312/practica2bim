//primera forma

function crearPersona(nombre)
{
    var obj={};
    obj.nombre=nombre;
    return obj;
}
var nombre = crearPersona("Bryan");
console.log(nombre);