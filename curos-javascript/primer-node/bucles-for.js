//bucles for
// for (inicializacion; codición; actualización){}

for (let i = 0; i < 10; i++){
    console.log(i);
}
// esto es bucle

let lista = [1, 4, 6, 2, 3, 7, 10, 12,];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}
// estructura for..of
for (let valor of lista){
    console.log(valor);
}
//estrutura foreach..
lista.forEach(valor => {
    console.log(valor);
})
//estructure for in..
let persona = {
    nombre: "fiore",
    apellido: "ordaz",
    edad: 30,
    isdeveloper: true
}
console.log(persona.nombre);

let prop = "edad, nombre, apellido";
console.log(persona.nombre);

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

