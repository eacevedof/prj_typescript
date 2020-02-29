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

function activar_batisenal():string{
  return "activada"
}

function pedir_ayuda():void{
  console.log("Auxilio!!!")
}

//casteo o aserciones
let poder = "100"
let largoDelPoder = (<string> poder).length
console.log(largoDelPoder)