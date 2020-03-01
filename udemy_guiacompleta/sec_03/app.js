//app.ts
//parametro por defecto
function nombre_completo(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    console.log(capitalizado);
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    return nombre + " " + apellido;
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombre = nombre_completo("tony", "stark");
console.log(nombre);
