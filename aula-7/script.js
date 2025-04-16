// aramazenar valor dos inputs altura e peso
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
//armazenar o valor do botão por id
var btn = document.getElementById("btn")
//armazenar o valor da div fim
var fim = document.getElementById("fim")

//função para calcular o IMC
function calcularIMC(){
    //armazenar apenas o valor do input
    const valorAltura = altura.value
    const valorPeso = peso.value

    // calcule o IMC 
    const imc = valorPeso / (valorAltura * valorAltura)
    // amarzenar o valor do resultado

    return imc
}

// função de click
function calcular(){
    //chama a função de calcularIMC e armazenar o valor
    const imc = calcularIMC()
    var mensagem = ""

    if(imc >= 17 && imc < 18.9){
        mensagem = "peso normal" 
    }

    if(imc >= 16 && imc < 17){
        mensagem = "magreza moderada"
    }

    if(imc >= 25 && imc < 29.9){
        mensagem = Sobrepeso
    }

    if(imc >= 30 && imc < 34.9){
        mensagem = "Sobrepeso grau I"
    }

    if(imc >= 35 && imc < 39.9){
        mensagem = "Sobrepeso grau II"
    }

    if(imc >= 40 && imc < 40.9){
        mensagem = "Obesidade grau III"
    }

    



    

    //renderizar o resultado na div fim
    fim.innerHTML = `
        <div class="linha"></div>
        <div class="resultado">
            <div class="esquerda">
                  <h2>${imc.toFixed(2)}</h2>
                  <p>Seu IMC</p>
            </div> 
            <div class="direita"
            </div>
        </div>
        <div class="linha"
`
}

//adicionar evento de click no botão 
btn.addEventListener("click", calcular)

