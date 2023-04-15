
//Arrays - listas - arreglos.
const lista = [1, "true", undefined, null];
const lista2 = new Array(2, "array", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento index 0"
const lista4 = [lista, lista2, lista3];


console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    altura: 9,
    anchura: 5,
    marca: "xiaomi",
    contactos: ["rosa", "clara", "paula"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: 36
    }
}

console.log(movil);
console.log(movil.marca);

//Fechas
// librerias de apoyo moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const cadena = new Date("march 25 2022");
console.log(cadena);

const valores = new Date(2022, 0, 15);
console.log(valores);

const dia = ahora.getDay()
const mes = ahora.getMonth() +1
const anyo = ahora.getFullYear()
console.log(dia, mes, anyo);






