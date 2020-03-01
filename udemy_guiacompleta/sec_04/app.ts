//app.ts
type Heroe = {
  nombre:string, 
  edad:number, 
  poderes:string[], 
  get_nombre:()=>string
}

let flash: Heroe = {

  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rápido","Viajar por el tiempo"],
  get_nombre(){
    return this.nombre
  }
}

let superman: Heroe = {
  nombre: "Clark Kent",
  edad: 500,
  poderes: ["Puede volar","Super veolocidad"],
  get_nombre(){
    return this.nombre
  }
}
