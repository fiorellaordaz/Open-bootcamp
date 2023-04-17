// casos especificos - break, continue
// se utiliza en casos super especificos
let lista = [1, 2, 3, 4, 5, 6, 7, 8];
for(let i = 0; 1 < lista.length; i++){
    
    if (lista[i] === 3){
        continue;
    }

console.log(lista[i]);

if (lista[i] > 5){
    break;
}
}

//cual es el ambito de un bucle?
