// bifurcaciones if - else
let saldo = 80;
let efectivo = 20;

if (efectivo < saldo) {
    console.log("puedes sacar dinero");
}
else{
    console.log("saldo insuficiente");
}

//if else + if

let nota = 5;
if (nota === 5){
    console.log("Excelente");
}else if (nota ===4){
    console.log("Aprobado");
}else if (nota ===3){
    console.log("Pasastte pero trabaja más");
}else if (nota ===2){
    console.log("Casi apruebas");
}else if (nota ===1){
    console.log("Reprobado");
}else{
    console.log("error, coloca un nota del 1 al 5");
}

//switch

let calificacion = 5;

switch (calificacion){
    case 5:
        console.log("Excelente");
        break;
    case 4:
        console.log("Aprobado");
        break;
    case 3:
        console.log("Pasaste");
        break;
    case 2:
        console.log("Casi pero no");
        break;
    case 1:
        console.log("Reprobado");
        break;
    default:
        console.log("error")
        break;
}

