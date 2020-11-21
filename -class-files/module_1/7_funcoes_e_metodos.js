/* 
    Criar um programa que cálcula média
    das turmas de alunos e envia
    mensagem do cálculo da média.
*/

const turmaA = [
    {
        nome: "Pandora",
        nota: 10
    },
    {
        nome: "Pedro",
        nota: 9.8
    },
    {
        nome: "Alice",
        nota: 9.9
    }
]

enviaMsg("turma A", turmaA)

const turmaB = [
    {
        nome: "Diane",
        nota: 8.9
    },
    {
        nome: "Gyovana",
        nota: 9
    },
    {
        nome: "James",
        nota: 9.6
    }
]

enviaMsg("turma B", turmaB)


function enviaMsg(indiceTurma, turma) {
    console.log(`A média da ${indiceTurma} foi de: ${calcMed(turma)}`)
}

function calcMed(turma) {
    return ((turma[0].nota + turma[1].nota + turma[2].nota) / 3).toFixed(1)
}

