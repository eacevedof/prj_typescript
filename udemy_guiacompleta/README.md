### Sección 1: Introducción a TypeScript 8 / 8|31 min
### [1. Introducción al TypeScript 17 min]()
### [2. Introducción al curso 2 min]()
### [3. ¿Cómo hacer preguntas? 1 min]()
### [4. ¿Qué veremos en esta sección? 1 min]()
### [5. Instalaciones necesarias 4 min]()
### [6. Hola Mundo - Prueba de las instalaciones 3 min]()
### [7. Modo observador - Watch mode 2 min]()
- `tsc app` pasa app.ts a app.js
- `tsc app.ts --w` hot reload
### [8. Inicializar el proyecto de TypeScript - tsconfig 3 min]()
- `tsc -init` proyecto de ts
- `tsc *.ts --w`
### Sección 2: Tipos básicos 3 / 17|40 min
### [9. ¿Qué veremos en esta sección? 1 min]()
### [10. Introducción a los tipos de datos 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6172774#content)
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/d43d669622e6397720db08999194fef7/image.png)
- string
- number
- boolean
- objetos literales
- clases
- funciones
- interfaces
- tipos genericos
- **var vs let**
- [pregunta](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6173050#questions/7042792)
```js
if (false){
    var a = 10
}
console.log(a)
//a is not defined

if(false){
    let a = 10
}
console.log(a)
//a is not defined
```
### [11. Más información sobre los tipos de datos 1 min]()
- [Doc oficial](http://www.typescriptlang.org/docs/handbook/basic-types.html)
### [12. Booleans - Booleanos 4 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6153970#content)
```ts
//app.ts
console.log("app.ts")
let isSuperman:boolean = true
let isBatman:boolean

//no recomendable
// let isAquaman = true
let isAquaman:boolean = true

if(isSuperman){
  console.log("Superman! ..estamos salvados")
}
else{
  console.log("Ooops! ohh")
}

isSuperman = convertir_clark()

if(isSuperman){
  console.log("Superman! ..estamos salvados")
}
else{
  console.log("Ooops! ohh")
}

function convertir_clark(){
  return false
}
```
### [13. Numbers - Números 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6153976#content)
```ts
//app.ts
let avengers:number = 5
let villanos:number //esto estaria en undefined
let otros=2

if(avengers>villanos){ //aqui me marca como error
  //se ejecutaria esto
  console.log("Estamos salvados")
}
else{
  console.log("Estamos muertos")
}

otros=35
otros=123.12
otros="123" //error
```
### [14. Strings - Cadenas de caracteres 5 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6153982#content)
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/9ef71b898c89310835e147d989d31dc3/image.png)
```ts
//app.ts
let batman:string = "Batman"
let linternav:string = "Linterna Verde"
let volcannegro:string = "Volcan negro"

console.log(batman)
console.log(linternav)
console.log(volcannegro)

let concatenar:string = `Los héroes: ${batman}, ${linternav}, ${volcannegro}`

console.log(concatenar)
```
### [15. Tipo Any 3 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6174034#content)
- ![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/944x224/87af1c7547390964f2fc35ba2cd29efe/image.png)
- Si no llevan tipo son de tipo "any"
```ts
//app.ts
//let vengador;
let vengador:any = "Superman"

let existe;
let derrotas;

vengador = "Dr. Strange"
console.log(vengador.charAt(0))

vengador = 150.5555
console.log(vengador.toFixed(2))

vengador = true
console.log(vengador)
```
### [16. Arrays - Arreglos 3 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6153992#content)
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/e5ad27aa024eea02a0f40ef050179f7c/image.png)
```ts
//app.ts
let arreglo:number[] = [1,3,4,5]
arreglo.push(15)

let villanos:string[] = ["Omega Rojo","Dormammu","Duende Verde"]

villanos.push("otro")
```
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/edbc3640c4b3b0230e47fcd4110968d2/image.png)
### [17. Tuples - Tuplas 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6153996#content)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/e26d3edf693662210777453700446138/image.png)
```ts
//app.ts

//las tuplas son arrays finitos con posiciones tipadas
let heroe:[string,number,boolean] = ["Dr. Strange",100,true]

heroe.push(true) //lo aceptaria, un caso raro
```
### [18. Emun - Enumeraciones 4 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154008#content)
```ts
//app.ts
enum Volumen {
  min = 1,
  medio = 5,
  max = 10
}

let audio:number = Volumen.medio
console.log(audio)
console.log(Volumen)
```
```js
//app.js
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen);
```
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/4c0dc756f2aaee8a0c2c276a5b2b759f/image.png)
![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/958x362/be02104b932ff45d7f4bee908b6d9ac6/image.png)

### [19. Void - Vacío 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154016#content)
- void es *ningún tipo*
```ts
//app.ts

//esta función no regresa nada
function llamar_batman():void{
  console.log("Mostrar la batiseñal")
  //return 1 lo marcaria como error
}

let mensaje = llamar_batman()
console.log(mensaje) //undefined
```
### [20. Never - Nunca 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154030#content)
- Es algo que nunca debe suceder
- Si llega a este punto la app deberia de salir
- Es el tipo de excepcion
![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/1168x161/5fffe8f14c97ef9d9509606a92d0e47d/image.png)
![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/968x254/c6086a513c3f1f191ea461eb7f76ecca/image.png)
```ts
//app.ts
function error(mensaje:string):never{
  throw new Error(mensaje)
}
error("Ha ocurrido un error crítico")
```
### [21. Aserciones de tipo 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154058#content)
![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/1187x108/cde86cf9a9c14e55beadec1bbf6db69d/image.png)
```ts
//app.ts
let cualquiervalor:any = "Cualquier cosa"
let largoDelString:number = (<string>cualquiervalor).length
console.log(largoDelString) //devuelve 14
```
### [22. Null y Undefined 3 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154024#content)
- tsconfig.json: **"strictNullChecks": true,**
- Evita que se pueda asignar undefined o null a una variable con otro tipo
- ![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/1012x191/d3ff40d59401c6a96890a42209f4e651/image.png)
```ts
//app.ts
//undefined y null 
let ironman:string
ironman="Tony"
ironman=null
ironman=undefined
```
### [23. Ejercicio práctico #1. 1 min]()
- carpeta ejercicio
### [24. Resolución del Ejercicio #1 4 min Cuestionario 1: Exámen teórico #1](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154118#content)
```ts
//app.ts
//ejercicio

let batman:string = "Bruce"
let superman:string = "Clark"
let existe:boolean = false

let parejaHeroes:[string,string] = [batman,superman]
let villano:[string,number,boolean] = ["Lex Lutor",5,true];

let aliados:string[] = ["Mujer m","acu"]

enum fuerza {
  flash=5,
  superman=100,
  batman=1,
  acuaman=0
}

let fuerzaFlash = fuerza.flash
let fuerzaSuperman = fuerza.superman

function activar_batisenal():string{
  return "activada"
}

function pedir_ayuda():void{
  console.log("Auxilio!!!")
}

//casteo o aserciones
let poder:string = "100"
let largoDelPoder:number = poder.length
console.log(largoDelPoder)
```
### Sección 3: Funciones y objetos 0 / 10|26 min
### [25. ¿Qué veremos en esta sección? 1 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6230455#content)
- Esta sección esta enfocada en aprender como trabajan las funciones en TypeScript y también nos enfocaremos en aplicar buenas prácticas a la hora de crearlas.
- Puntualmente tenemos:
    Declaraciones básicas de funciones
    Parámetros obligatorios
    Parámetros opcionales
    Parámetros por defecto
    Parámetros REST
- Tipo de datos "Function"
- Al final de la sección, tendremos el examen práctico y el examen teórico.
### [26. Funciones básicas 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154122#content)
- Las funciones entre js y ts son iguales
```ts
//app.ts
let heroe:string = "flash"

function imprime_heroe():string{
  return heroe
}

let activar_batisenal = ():string =>{
  return "Batiseñal activada"
}

console.log(imprime_heroe())
console.log(activar_batisenal())
```
### [27. Parámetros obligatorios de las funciones 2 min]()
```ts
//app.ts
//parámetros obligatorios
function nombre_completo(nombre:string, apellido:string):string{
  return `${nombre} ${apellido}`
}

let nombre = nombre_completo("clark","")

console.log(nombre)
```
### [28. Parámetros opcionales de las funciones. 3 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154162#content)
- En js todos los parámetros son opcionales
- ![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/64d69e1bd29dd65682ba38aeb05d30c2/image.png)
```ts
//app.ts
//parámetro opcional con ?
function nombre_completo(nombre:string, apellido?:string):string{
  if(apellido)
    return `${nombre} ${apellido}`
  return `${nombre}`
}
let nombre = nombre_completo("clark")
console.log(nombre)
```
### [29. Parámetros por defecto 5 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6176840#content)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/f30af8ceecb4b260431e9aafe75a729d/image.png)
```ts
//app.ts
//parametro por defecto
function nombre_completo(
  nombre:string, apellido:string, capitalizado:boolean=true
){
  console.log(capitalizado)
  if(capitalizado){
    return capitalizar(nombre) + " " + capitalizar(apellido)
  }
  return nombre + " " +apellido
}
function capitalizar(palabra:string):string{
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase()
}
let nombre = nombre_completo("tony","stark")
console.log(nombre)
```
```js
//app.js
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
```
### [30. Parametros REST 3 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154196#content)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/8392983725fb2697c89a740e3c8ebb37/image.png)
```ts
//app.ts
//parámetros rest
function nombre_completo(nombre:string, ...losdemas:string[]):string{
  return nombre + " " + losdemas.join(" ")
}

let superman:string = nombre_completo("clark","Joseph","Kent")
let ironam:string = nombre_completo("Anthony","Edward","Tony","Stark")

console.log(superman)
console.log(ironam)
```
```js
//app.js
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
```
![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/956x256/a7e15672c15ffea4b60101d93257d035/image.png)

### [31. Tipo Función 4 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154264#content)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/4c2d65324ef62927ff084b7f8aa2a507/image.png)
```ts
//app.ts
//tipo funcion
function sumar(a:number,b:number):number{
  return a+b
}
function saludar(nombre:string):string{
  return "I'm "+nombre
}
function salvar_mundo():void{
  console.log("El mundo está salvado!")
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
let miFuncion: (x:number, y:number) => number 

miFuncion = 10  //ts error
console.log(miFuncion) //10

miFuncion = sumar
console.log(miFuncion(5,5))//10

miFuncion = saludar //ts error
console.log(miFuncion("Batman"))//Im Batman

miFuncion = salvar_mundo //ts error
console.log(miFuncion()) //undefined
```
### [32. Ejercicio práctico #2 1 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154326#content)
> Descargue el material adjunto, trabaje en ser lo más explícito que pueda con los tipos de datos y realice lo que en los comentarios del archivo se pide.
### [33. Resolución del ejercicio práctico #2 5 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154342#content)
```ts
//app.ts
function sumar(a:number, b:number):number{
  return a+b
}

let contar = function(heroes:string[]):number{
  return heroes.length
}

let superheroes = ["Flash","Arrow","Superman"]
contar(superheroes)

function llamar_batman(llamar:boolean=false):void{
  if(llamar){
    console.log("Batiseñal activada")
  }
}

llamar_batman(true)

function unir_heroes(...heroes:string[]):string{
  return heroes.join(", ")
}

function nohace_nada(numero:number, texto:string, booleano:boolean, arreglo:any[]){
}

let nohacenada_tampoco : (n:number, t:string, b:boolean, a:any[])=>void
nohacenada_tampoco = nohace_nada
```
```js
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
```
### [Cuestionario 2: Examen teórico #2](https://www.udemy.com/course/typescript-guia-completa/learn/quiz/311244#content)

### Sección 4: Objetos y tipos personalizados en TypeScript 0 / 11|21 min
### [34. ¿Qué veremos en esta sección? 1 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6230505#content)
- Aprenderemos a utilizar los objetos en TypeScript, su uso y mantener nuestro código bien limpio mediante tipos personalizados.
- Los temas serán:
  - Objetos básicos
  - Crear objetos con tipos específicos
  - Crear métodos dentro de objetos
  - Tipos personalizados
  - Crear variables que soporten varios tipos a la vez.
  - Comprobar el tipo de un objeto.
  - Al final, el respectivo examen práctico y teórico.
### [35. Objetos básicos 3 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154352#content)
![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/1083x261/183a61e08dad5e27749c650eb52ce738/image.png)
```ts
//app.ts
let flash = {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rápido","Viajar por el tiempo"]
}

flash = {
  nombreHeroe: "Clark Kent",
  edad: 500,
  poderes: ["Poder volar"]
}
```
### [36. ¿Cómo crear objetos con tipos específicos? 3 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154364#content)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/0d6ef415360bb6cafa8f3a15cd5c7e6d/image.png)
```ts
//definiendo un objeto como tipo de datos
//el orden no importa
let flash: {nombre:string, edad:number, poderes:string[]} = {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rápido","Viajar por el tiempo"],
  get_nombre(){
    //esto en js es válido pero no en ts
  }
}
```
```js
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar por el tiempo"],
    get_nombre: function () {
        //esto en js es válido pero no en ts
    }
};
```
### [37. Métodos dentro de los objetos 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6186432#content)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/e4460dfb5055a7fc0e1558ecd4c85ce2/image.png)
```ts
let flash: {nombre:string, edad:number, 
  poderes:string[], get_nombre:()=>string} = {

  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rápido","Viajar por el tiempo"],
  get_nombre(){
    return this.nombre
  }
}

console.log(flash.get_nombre())
```
### [38. ¿No creen que es un dolor de cabeza eso? 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154398#content)
```ts
//app.ts
//aqui el problema está en que si quiero añadir un valor numerico en poderes
//debería cambiar cambiar el tipo de poderes en los dos objetos
//veremos como hacer una plantilla de objetos
let flash: {nombre:string, edad:number, 
  poderes:string[], get_nombre:()=>string} = {

  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rápido","Viajar por el tiempo"],
  get_nombre(){
    return this.nombre
  }
}

let superman: {nombre:string, edad:number, 
  poderes:string[], get_nombre:()=>string} = {

  nombre: "Clark Kent",
  edad: 500,
  poderes: ["Puede volar","Super veolocidad"],
  get_nombre(){
    return this.nombre
  }
}
```
### [39. Tipos personalizados 3 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154402#content)
- palabra reservada: **type**
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/255802a269aca3fa0b70c47eb291f1f4/image.png)
```ts
//app.ts
type Heroe = {
  nombre:string, 
  edad:number, 
  poderes:string[], 
  get_nombre:()=>string
}

let flash: Heroe = {

  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rápido","Viajar por el tiempo"],
  get_nombre(){
    return this.nombre
  }
}

let superman: Heroe = {
  nombre: "Clark Kent",
  edad: 500,
  poderes: ["Puede volar","Super veolocidad"],
  get_nombre(){
    return this.nombre
  }
}

```
### [40. Multiples tipos permitidos 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154422#content)
- union de tipos *pipe* **|**
![](https://trello-attachments.s3.amazonaws.com/5e5a5be99913114e3ffa8299/1040x240/eb62d4efa1055fdcda1f67b83d40ec6f/image.png)
```ts
//app.ts
type Heroe = {
  nombre:string, 
  edad:number,
}

let loquesea:string | number | Heroe = "Fernando"
loquesea = {
  nombre: "Flash",
  edad: 56
}
```
```js
var loquesea = "Fernando";
loquesea = {
    nombre: "Flash",
    edad: 56
};
```
### [41. Revisar el tipo de un objeto o variable 2 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154432#content)
![](https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5e5a5be99913114e3ffa8299/45ea18167d09ed05d1d3e08c41be5923/image.png)
```ts
//app.ts
let cosa:any = function():void{
  console.log("soy fn cosa")
}
console.log(typeof cosa)
if(typeof cosa === "string"){
  console.log("cosa es un numero")
}
else{
  console.log("Este codigo, indica que no es un string")
}
```
### [42. Ejercicio práctico #3 1 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154516#content)
> Descargue el material adjunto, trabaje con los tipos de datos y la información que aprendió en esta sección. Sea lo más especifico en los tipos posible y reutilice el primer tipo de dato (el del automóvil)
```ts
//app.ts
//ejercicio sec04
type Auto = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?:()=>void
}

let batimovil: Auto = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
}

let bumblebee: Auto = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar(){
    console.log("Disparando")
  }
}

type Villano = {
  nombre:string,
  edad:number|undefined, 
  //como estoy en modo estricto tengo que poner undefined
  mutante:boolean
}

//Villanos debe de ser un 
//arreglo de objetos personalizados
let villanos: Villano[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }
]

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
  poder: string,
  estatura: number,
}

type Apocalipsis = {
  lider: boolean,
  miembros: string[]
}

let charles: Charles = {
  poder:"psiquico",
  estatura: 1.78
}

let apocalipsis: Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

let mystique: Charles | Apocalipsis

mystique = charles
mystique = apocalipsis
```
```js
var batimovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4
};
var bumblebee = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar: function () {
      console.log("Disparando");
  }
};
//Villanos debe de ser un 
//arreglo de objetos personalizados
var villanos = [
  {
      nombre: "Lex Luthor",
      edad: 54,
      mutante: false
  },
  {
      nombre: "Erik Magnus Lehnsherr",
      edad: 49,
      mutante: true
  },
  {
      nombre: "James Logan",
      edad: undefined,
      mutante: true
  }
];
var charles = {
  poder: "psiquico",
  estatura: 1.78
};
var apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
```
### [43. Resolución del ejercicio práctico #3 5 min](https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6154524#content)
### [Cuestionario 3: Examen teórico #3](https://www.udemy.com/course/typescript-guia-completa/learn/quiz/311250#content)

### Sección 5: Depuración de Errores y el archivo tsconfig.json 0 / 9|27 min
### [44. ¿Qué veremos en esta sección? 1 min]()
- 
### [45. ¿Por qué se compila aunque existe algún error? 2 min]()
- 
### [46. ¿Qué es el archivo tsconfig y para qué nos puede servir? 4 min]()
- 
### [47. ¿Es posible la depuración del código de TypeScript? 6 min]()
- 
### [48. Remover los comentarios de los archivos de JavaScript 3 min]()
- 
### [49. Incluir y excluir carpetas y/o archivos 3 min]()
- 
### [50. outFile - Archivo de salida 5 min]()
- 
### [51. Cambiar la version de JavaScript al momento de traducir - target 2 min]()
- 
### [52. Detectar cambios en archivos de forma automática 2 min]()
- 
### Sección 6: Características de ES6 o JavaScript2015 disponibles a través …Sección 6: Características de ES6 o JavaScript2015 disponibles a través TypeScript 0 / 14|50 min
### [53. ¿Qué veremos en esta sección? 1 min]()
- 
### [54. Introducción al tema 2 min]()
- 
### [55. Variables LET 6 min]()
- 
### [56. Constantes - const 4 min]()
- 
### [57. Templates literales 4 min]()
- 
### [58. Funciones de Flecha 9 min]()
- 
### [59. Destructuración de Objetos 3 min]()
- 
### [60. Destructuración de Arreglos 2 min]()
- 
### [61. Nuevo ciclo - For Of 4 min]()
- 
### [62. Introducción a las clases de la Programación Orientada a Objetos (PO… 8 min]()
- 
### [63. Clases en ES6 5 min]()
- 
### [64. Ejercicio práctico #4 1 min]()
- 
### [65. Resolución del ejercicio práctico #4 3 min Cuestionario 4: Examen teórico #4]()
- 
### [11. Más información sobre los tipos de datos 1 min]()
- 
### [12. Booleans - Booleanos 4 min]()
- 
### [13. Numbers - Números 2 min]()
- 
### [14. Strings - Cadenas de caracteres 5 min]()
- 
### [15. Tipo Any 3 min]()
- 
### [16. Arrays - Arreglos 3 min]()
- 
### [17. Tuples - Tuplas 2 min]()
- 
### [18. Emun - Enumeraciones 4 min]()
- 
### [19. Void - Vacío 2 min]()
- 
### [20. Never - Nunca 2 min]()
- 
### [21. Aserciones de tipo 2 min]()
- 
### [22. Null y Undefined 3 min]()
- 
### [23. Ejercicio práctico #1. 1 min]()
- 
### [24. Resolución del Ejercicio #1 4 min]()
- 
### Sección 7: Clases en TypeScript 0 / 10|44 min
### [66. ¿Qué veremos en esta sección? 1 min]()
- 
### [67. Definición de una clase básica en TypeScript 3 min]()
- 
### [68. Constructores 4 min]()
- 
### [69. Propiedades publicas, privadas y protegidas 4 min]()
- 
### [70. Métodos públicos, privados y protegidos 6 min]()
- 
### [71. Herencia, super y definición de propiedades en el constructor 9 min]()
- 
### [72. Gets y Sets 8 min]()
- 
### [73. Métodos y propiedades estáticos 3 min]()
- 
### [74. Clases Abstractas 3 min]()
- 
### [75. Constructores privados 5 min]()
- 
### Sección 8: Interfaces 0 / 10|24 min
### [76. ¿Qué veremos en esta sección? 1 min]()
- 
### [77. ¿Por qué es importante una interfaz? 3 min]()
- 
### [78. Interfaz básica 4 min]()
- 
### [79. Propiedades opcionales 1 min]()
- 
### [80. Métodos en la interfaz 4 min]()
- 
### [81. Interfaces en las clases 2 min]()
- 
### [82. Interfaces para las funciones 3 min]()
- 
### [83. Ejercicio práctico #5: Implementación de interfaces 1 min]()
- 
### [84. Resolución del ejercicio práctico #5 7 min Cuestionario 5: Examen teórico #5]()
- 
### Sección 9: NameSpaces 0 / 6|20 min
### [85. ¿Qué veremos en esta sección? 1 min]()
- 
### [86. Explicando el problema y la necesidad 1 min]()
- 
### [87. Creando un Namespace 7 min]()
- 
### [88. Multiples namespaces en un proyecto 7 min]()
- 
### [89. Importar namespaces 3 min]()
- 
### [90. Los problemas de los namespaces 2 min]()
- 
### Sección 10: Módulos 0 / 9|29 min
### [91. ¿Qué veremos en esta sección? 1 min]()
- 
### [92. Actualización de SystemJS 1 min]()
- 
### [93. Módulos 6 min]()
- 
### [94. Importador de módulos - Systemjs 2 min]()
- 
### [95. Preparando nuestro proyecto para importar módulos - Lite-Server 5 min]()
- 
### [96. Nota: instalando SystemJS 1 min]()
- 
### [97. Instalando Systemjs 6 min]()
- 
### [98. Importando y exportando módulos - Alias y default 6 min]()
- 
### [99. Notas importantes usando Módulos. 3 min]()
- 
### Sección 11: Genéricos - Generics 0 / 6|17 min
### [100. ¿Qué veremos en esta sección? 1 min]()
- 
### [101. Introducción a los Genéricos 2 min]()
- 
### [102. Creando funciones genéricas 5 min]()
- 
### [103. Ejemplo de función genérica en acción 3 min]()
- 
### [104. Arreglos Genéricos 2 min]()
- 
### [105. Clases genéricas 5 min]()
- 
### Sección 12: Decoradores 0 / 9|32 min
### [106. ¿Qué veremos en esta sección? 1 min]()
- 
### [107. Introducción a los decoradores 1 min]()
- 
### [108. Decoradores de clases 5 min]()
- 
### [109. Decoradores de fabrica - Factory decorators 4 min]()
- 
### [110. Ejemplo de un decorador 4 min]()
- 
### [111. Decoradores anidados 2 min]()
- 
### [112. Decoradores de métodos 8 min]()
- 
### [113. Decoradores de propiedades 5 min]()
- 
### [114. Decoradores de parámetros 3 min]()
- 
### Sección 13: Usando librerías que no están escritas en TypeScript ( Como … 0 / 8|29 min
### [115. ¿Qué veremos en esta sección? 1 min]()
- 
### [116. Introducción al uso de las librerías de terceros 2 min]()
- 
### [117. Preparando nuestro proyecto con jQuery 3 min]()
- 
### [118. Instalando jQuery y agregando la referencia a SystemJS 6 min]()
- 
### [119. Agregando definiciones de archivos "*.d.ts" 4 min]()
- 
### [120. Agregando definiciones mediante node 2 min]()
- 
### [121. Usando jQuery con TypeScript 4 min]()
- 
### [122. Usando SweetAlert en nuestro proyecto 8 min]()
- 