/*
    Cálculo de aposentadoria

    Crie um programa para calcular a 
    aposentadoria de uma pessoa.
*/

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if (sexo == "M" && contribuicao >= 35) {
    const rule = idade + contribuicao
    if (rule >= 95) {
        console.log(`Parabéns ${nome}, você já pode se aposentar.`)
    } else {
        console.log(`Infelizmente você ainda não pode se aposentar.`)
    }
} else if (sexo == "F" && contribuicao >= 30) {
    const rule = idade + contribuicao
    if (rule >= 85) {
        console.log(`Parabéns ${nome}, você já pode se aposentar.`)
    } else {
        console.log(`Infelizmente você ainda não pode se aposentar.`)
    }  
} else {
    console.log(`${nome} infelizmente, você ainda não pode se aposentar.`)
}