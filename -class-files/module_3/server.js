const express = require('express') // O require é usado quando nós importamos um módulo de outro arquivo, seja uma função, string...
const server = express() // Aqui a const express se tornou um função

server.get("/", function(req, res){ // .get "é um método que vai pegar rota estipulada e executar uma função com parâmetro de request do usuario e um parâmetro de resposta do servidor" 
    return res.send("Hello!") // .send é um método que envia a respostar para o request da interface http
})

server.listen(5000, function(){ // .listen é um método agora do (server) que vai ficar "ouvido algo e quando esse algo acontecer ele executa uma função de callback, ou seja vai executar algo"
    console.log("server is running")
})