//app.ts
//tipo funcion
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvar_mundo() {
    console.log("El mundo está salvado!");
}
/*
let miFuncion;

miFuncion = 10
console.log(miFuncion) //10

miFuncion = sumar
console.log(miFuncion(5,5))//10

miFuncion = saludar
console.log(miFuncion("Batman"))//Im Batman

miFuncion = salvar_mundo
console.log(miFuncion()) //undefined
*/
var miFuncion;
miFuncion = 10; //ts error
console.log(miFuncion); //10
miFuncion = sumar;
console.log(miFuncion(5, 5)); //10
miFuncion = saludar; //ts error
console.log(miFuncion("Batman")); //Im Batman
miFuncion = salvar_mundo; //ts error
console.log(miFuncion()); //undefined
