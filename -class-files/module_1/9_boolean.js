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
        nota: 4.9
    }
]

alunoReprovado(turmaA)

const turmaB = [
    {
        nome: "Diane",
        nota: 3
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

alunoReprovado(turmaB)

function alunoReprovado(turma) {
    for (let aluno of turma) {
        marcarAlunosReprovados(aluno)
        enviaMsg(aluno)
    }
}

function marcarAlunosReprovados(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

function enviaMsg(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome}, está reprovado!`)
    }
}

