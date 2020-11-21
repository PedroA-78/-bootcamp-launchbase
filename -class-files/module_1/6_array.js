const alunos = [
    {
        nome: "Pandora",
        nota: 9.8
    },
    {
        nome: "Pedro",
        nota: 8.6 
    },
    {
        nome: "Alice",
        nota: 9.4
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

console.log(media.toFixed(2))