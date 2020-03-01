//app.ts

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