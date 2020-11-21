/*
    Vetores e objetos

    Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

    As tecnologias também devem ser objetos contendo nome e especialidade
*/

const programador = {
    nome: "Jorge",
    idade: "26",
    tecnologias: [
        { 
            nome: 'C++', 
            especialidade: 'Desktop' 
        },
        { 
            nome: 'Python', 
            especialidade: 'Data Science' 
        },
        { 
            nome: 'JavaScript', 
            especialidade: 'Web/Mobile' 
        }
    ]
}

console.log(`O usuário ${programador.nome}, tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`)
