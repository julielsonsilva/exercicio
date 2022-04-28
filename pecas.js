var listadepecas = ["motor", "amortecedor", "cambio", "freio", "disco de freio", "radiador"]

if (listadepecas.length < 10){
    console.log("É possivel cadastrar mais peças")
}else{
    console.log("não tem mais espaço na lista")
}

let peso = 50;

if (peso < 100){
    console.log("A peça deve pesar no minimo 100g")
}else{
    console.log("peso peça adequado")
}
let nomePecas = "disco de freio"
if (nomePecas.length > 3){
    console.log("O nome deve ter mais que 3 caracteres, digite um nome adeguado")
}