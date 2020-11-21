/* 
    Criar um programa que cálcula média
    das turmas independente da quantidade 
    de alunos e envia mensagem do cálculo da média.
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
    },
    {
        nome: "Hanna",
        nota: 5.3
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
    },
    {
        nome: "Leandro",
        nota: 7.7
    },
    {
        nome: "Douglas",
        nota: 10
    }
]

enviaMsg("turma B", turmaB)


function enviaMsg(indiceTurma, turma) {
    console.log(`A média da ${indiceTurma} foi de: ${calcMed(turma)}`)
}

function calcMed(turma) {
    let media = 0
    for (let i = 0; i < turma.length; i++) {
        media += turma[i].nota
    }
    media /= turma.length
    return media.toFixed(1)
}

