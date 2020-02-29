//app.ts
//ejercicio
var batman = "Bruce";
var superman = "Clark";
var existe = false;
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
var aliados = ["Mujer m", "acu"];
var fuerza;
(function (fuerza) {
    fuerza[fuerza["flash"] = 5] = "flash";
    fuerza[fuerza["superman"] = 100] = "superman";
    fuerza[fuerza["batman"] = 1] = "batman";
    fuerza[fuerza["acuaman"] = 0] = "acuaman";
})(fuerza || (fuerza = {}));
function activar_batisenal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
//casteo o aserciones
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
