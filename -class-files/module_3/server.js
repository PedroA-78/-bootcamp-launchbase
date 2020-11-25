const express = require('express') // O require é usado quando nós importamos um módulo de outro arquivo, seja uma função, string...
const nunjucks = require('nunjucks') // Fazendo a requisição do nunjucks no nosso código

const server = express() // Aqui a const express se tornou um função
const videos = require("./data")

server.use(express.static('public'))  // .use é Middleware. Middleware é um bloco de código que é executado em todas as requisições ou nas que respeitam um certo padrão. E é respeitado a ordem de adição de cada um deles.

server.set('view engine', 'njk') // .set é um método que define o valor da configuração especificado no primeiro parâmetro 

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){ // .get "é um método que vai pegar rota estipulada e executar uma função com parâmetro de request do usuario e um parâmetro de resposta do servidor"
    const data = {
        avatar_url: "/assets/fred_flintstone.png",
        name: "Fred Flintstone",
        role: "Operador de guindaste - Slate Rock and Gravel Company",
        description: 'Fred é um típico operário, que trabalha como "operador de guindaste" na <a href="https://flintstones.fandom.com/wiki/Slate_Rock_and_Gravel_Company" target="_blank">Slate Rock and Gravel Company</a>.',
        links: [
            { name: "GitHub", url: "https://github.com/" },
            { name: "Instagram", url: "https://www.instagram.com/" },
            { name: "Twitter", url: "https://twitter.com/" }
        ]

    }

    return res.render("about", {about: data}) // .render é um método usado para renderizar uma visualização e enviar a string HTML renderizada para o cliente.
})

server.get("/portifolio", function(req, res){
    return res.render("portifolio", {items: videos})
})

server.listen(5000, function(){ // .listen é um método agora do (server) que vai ficar "ouvido algo e quando esse algo acontecer ele executa uma função de callback, ou seja vai executar algo"
    console.log("server is running")
})