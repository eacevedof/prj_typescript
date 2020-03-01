//app.ts
//parámetros rest
function nombre_completo(nombre:string, ...losdemas:string[]):string{
  return nombre + " " + losdemas.join(" ")
}

let superman:string = nombre_completo("clark","Joseph","Kent")
let ironam:string = nombre_completo("Anthony","Edward","Tony","Stark")

console.log(superman)
console.log(ironam)