//uma função que receba os dias e os kms rodos
//o valor por dia é 250
//o valor por km rodado é 0.50 
//se tiver rodados mais de 1000km, o valor por km fica 0.25
function calcularAluguel(dias, kms){
    const valorPorDia = 250;
 
    if(kms > 1000){
         const valorPorKm = 0.25;
         const calculoDiaria = dias * valorPorDia
         const valorKm = kms * valorPorKm
 
         const total = calculoDiaria + valorKm
         console.log(total)
    } else {
         const valorPorKm = 0.50;
         const calculoDiaria = dias * valorPorDia
         const valorKm = kms * valorPorKm
 
         const total = calculoDiaria + valorKm
         console.log(total)
    }
 }
 
 calcularAluguel(10, 400)