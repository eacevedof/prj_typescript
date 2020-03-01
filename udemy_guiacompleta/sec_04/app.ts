//app.ts
type Heroe = {
  nombre:string, 
  edad:number,
}

let loquesea:string | number | Heroe = "Fernando"
loquesea = {
  nombre: "Flash",
  edad: 56
}