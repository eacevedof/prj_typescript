//app.ts
var cosa = function () {
    console.log("soy fn cosa");
};
console.log(typeof cosa);
if (typeof cosa === "string") {
    console.log("cosa es un numero");
}
else {
    console.log("Este codigo, indica que no es un string");
}
