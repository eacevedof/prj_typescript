//app.ts
//parámetros obligatorios
function nombre_completo(nombre:string, apellido:string):string{
  return `${nombre} ${apellido}`
}

let nombre = nombre_completo("clark","")

console.log(nombre)