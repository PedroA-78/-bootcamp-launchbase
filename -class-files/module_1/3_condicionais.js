// Criar um programa que cálcula média
// das notas entre os alunos e envia
// mensagem do cálculo da média, se a
// media for maior que 5, parabenizar a turma.

const aluno1 = "Pandora"
const aluno2 = "Pedro"
const aluno3 = "Alice"

const notaAluno1 = 10
const notaAluno2 = 9
const notaAluno3 = 9.7

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3

if (media > 5) {
    console.log(`Parabéns a média for de ${media.toFixed(1)}`) // Quando se usa a crase(``), em uma string que pode conter também uma variavél declaradas por "${var}".
} else {
    console.log(`Infelizmente a média foi de ${media.toFixed(1)}`)
}