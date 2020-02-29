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
### [18. Emun - Enumeraciones 4 min]()
```ts
```
### [19. Void - Vacío 2 min]()
```ts
```
### [20. Never - Nunca 2 min]()
```ts
```
### [21. Aserciones de tipo 2 min]()
```ts
```
### [22. Null y Undefined 3 min]()
```ts
```
### [23. Ejercicio práctico #1. 1 min]()
```ts
```
### [24. Resolución del Ejercicio #1 4 min Cuestionario 1: Exámen teórico #1]()
```ts
```
### Sección 3: Funciones y objetos 0 / 10|26 min
### [25. ¿Qué veremos en esta sección? 1 min]()
- 
### [26. Funciones básicas 2 min]()
- 
### [27. Parámetros obligatorios de las funciones 2 min]()
- 
### [28. Parámetros opcionales de las funciones. 3 min]()
- 
### [29. Parámetros por defecto 5 min]()
- 
### [30. Parametros REST 3 min]()
- 
### [31. Tipo Función 4 min]()
- 
### [32. Ejercicio práctico #2 1 min]()
- 
### [33. Resolución del ejercicio práctico #2 5 min Cuestionario 2: Examen teórico #2]()
- 
### Sección 4: Objetos y tipos personalizados en TypeScript 0 / 11|21 min
### [34. ¿Qué veremos en esta sección? 1 min]()
- 
### [35. Objetos básicos 3 min]()
- 
### [36. ¿Cómo crear objetos con tipos específicos? 3 min]()
- 
### [37. Métodos dentro de los objetos 2 min]()
- 
### [38. ¿No creen que es un dolor de cabeza eso? 2 min]()
- 
### [39. Tipos personalizados 3 min]()
- 
### [40. Multiples tipos permitidos 2 min]()
- 
### [41. Revisar el tipo de un objeto o variable 2 min]()
- 
### [42. Ejercicio práctico #3 1 min]()
- 
### [43. Resolución del ejercicio práctico #3 5 min Cuestionario 3: Examen teórico #3]()
- 
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