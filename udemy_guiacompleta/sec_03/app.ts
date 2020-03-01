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