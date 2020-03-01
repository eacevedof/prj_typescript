//app.ts
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar por el tiempo"],
    get_nombre: function () {
        return this.nombre;
    }
};
console.log(flash.get_nombre());
