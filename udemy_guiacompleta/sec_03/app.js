//app.ts
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superheroes = ["Flash", "Arrow", "Superman"];
contar(superheroes);
function llamar_batman(llamar) {
    if (llamar === void 0) { llamar = false; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamar_batman(true);
function unir_heroes() {
    var heroes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        heroes[_i] = arguments[_i];
    }
    return heroes.join(", ");
}
function nohace_nada(numero, texto, booleano, arreglo) {
}
var nohacenada_tampoco;
nohacenada_tampoco = nohace_nada;
