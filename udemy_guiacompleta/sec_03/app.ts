//app.ts
//parámetro opcional
function nombre_completo(nombre:string, apellido?:string):string{
  
  if(apellido)
    return `${nombre} ${apellido}`
  return `${nombre}`
}
let nombre = nombre_completo("clark")
console.log(nombre)