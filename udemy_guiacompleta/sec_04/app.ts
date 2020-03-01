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

