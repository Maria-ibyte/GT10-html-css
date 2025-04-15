const user = {
    nome: "Vitoria",
    altura: 1.60,
    peso: 65,
} 

//criar uma função que recebe o objeto user
// e calcule o IMC
// IMC = peso / (altura * altura)

function calculeIMC(user){
    const imc = user.peso / (user.altura * user.altura)
}

    if(imc < 16){
       return console.log("Magreza grave")
}

if(imc >= 16 && imc < 17){
    return console.log("Magreza moderada")
}

if(imc >= 17 && imc < 18.9){
    return console.log("normal")
}

if(imc >= 25 && imc < 29.9){
    return console.log("Sobrepeso")
}

if(imc >= 30 && imc < 34.9){
    return console.log(" Sobrepeso grau I")
}

if(imc >= 35 && imc < 39.9){
    return console.log("Sobrepeso grau II")
}

if(imc >= 40 && imc < 40.9){
    console.log("Obesidade grau III")
}