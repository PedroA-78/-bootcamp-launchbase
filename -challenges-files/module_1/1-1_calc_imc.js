/*
    Cálculo de IMC

    Crie um programa para calcular o IMC e 
    nível de obesidade de uma pessoa.
*/

const nome = "Carlos"
const peso = 84
const altura = 1.88

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`Carlos seu IMC é de ${imc.toFixed(2)}, e você está acima do peso.`)
} else {
    console.log(`Carlos seu IMC é de ${imc.toFixed(2)}, e você não está acima do peso.`)
}