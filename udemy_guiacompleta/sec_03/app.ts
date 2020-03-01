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