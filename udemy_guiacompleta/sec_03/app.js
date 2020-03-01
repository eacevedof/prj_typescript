//app.ts
//parámetros rest
function nombre_completo(nombre) {
    var losdemas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losdemas[_i - 1] = arguments[_i];
    }
    return nombre + " " + losdemas.join(" ");
}
var superman = nombre_completo("clark", "Joseph", "Kent");
var ironam = nombre_completo("Anthony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironam);
