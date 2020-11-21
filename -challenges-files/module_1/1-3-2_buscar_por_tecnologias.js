/*
    Busca por tecnologia

    Baseado no desafio anterior, utilize a mesma lista de usuários construída.

    Crie uma função que recebe os dados de um objeto de usuário e retorna SE 
    o usuário trabalha com CSS ou não.
*/

const usuarios = [
    { 
        nome: "Carlos", 
        tecnologias: ["HTML", "CSS"] 
    },
    { 
        nome: "Jasmine", 
        tecnologias: ["JavaScript", "CSS"] 
    },
    { 
        nome: "Tuane", 
        tecnologias: ["HTML", "Node.js"] 
    }
];


buscarTecnologia(usuarios, "CSS")

function buscarTecnologia(users, technology) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].tecnologias.indexOf(technology) > -1) {
            console.log(`${users[i].nome} trabalha com ${technology}.`)
        }
    }
}

