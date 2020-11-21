/*
    Construção e impressão de objetos

    Crie um programa que armazena dados da empresa
    Rocketseat dentro de um objeto.
*/

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Guilherme Gembala",
        numero: "260"
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}.`)
