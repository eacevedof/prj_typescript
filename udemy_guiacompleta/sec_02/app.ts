//app.ts

function error(mensaje:string):never{
  throw new Error(mensaje)
}

error("Ha ocurrido un error crítico")