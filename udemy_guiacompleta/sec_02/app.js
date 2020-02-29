//app.ts
var avengers = 5;
var villanos; //esto estaria en undefined
var otros = 2;
if (avengers > villanos) { //aqui me marca como error
    //se ejecutaria esto
    console.log("Estamos salvados");
}
else {
    console.log("Estamos muertos");
}
otros = 35;
otros = 123.12;
otros = "123"; //error
