//app.ts
//ejercicio sec04
type Auto = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?:()=>void
}

let batimovil: Auto = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
}

let bumblebee: Auto = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar(){
    console.log("Disparando")
  }
}

type Villano = {
  nombre:string,
  edad:number|undefined,
  mutante:boolean
}

//Villanos debe de ser un 
//arreglo de objetos personalizados
let villanos: Villano[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }
]

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
  poder: string,
  estatura: number,
}

type Apocalipsis = {
  lider: boolean,
  miembros: string[]
}

let charles: Charles = {
  poder:"psiquico",
  estatura: 1.78
}

let apocalipsis: Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

let mystique: Charles | Apocalipsis

mystique = charles
mystique = apocalipsis