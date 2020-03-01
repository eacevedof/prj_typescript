//app.ts
//parámetro opcional
function nombre_completo(nombre, apellido) {
    if (apellido)
        return nombre + " " + apellido;
    return "" + nombre;
}
var nombre = nombre_completo("clark");
console.log(nombre);
