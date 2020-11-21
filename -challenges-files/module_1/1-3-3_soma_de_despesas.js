/*
    Soma de despesas e receitas

    Crie um programa que calcula a soma de receitas e despesas 
    de usuários e no fim retorna o saldo (receitas - despesas).
*/

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

enviaMsg(usuarios)

function enviaMsg(user) {
    for (let i = 0; i < user.length; i++) {
        console.log(`O ${user[i].nome} tem um total de saldo de: R$${calcSaldo(user[i].receitas, user[i].despesas).toFixed(2)}`)
    }
    
}

function calcSaldo(receita, despesas) {
    return sum(receita) - sum(despesas)
}

function sum(valores) {
    let sum = 0
    for (let i = 0; i < valores.length; i++) {
        sum += valores[i]
    }
    return sum
}

