let personas = 0
let animales = 0

buclePersonas: while (true){
    bucleanimales: while (true){
console.log("esto es un bucle: ${personas}${animales}");
animales++
if (animales === 10){
animales = 0
break bucleanimales
}
if (personas === 2){
personas = 0
break buclePersonas
}
personas++
    }
}
console.log("hasta aqui");