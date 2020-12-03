const express = require('express')
const nunjucks =  require('nunjucks')
const routes = require('./routes')

const server =  express()

server.set('view engine', 'njk')

server.use(express.urlencoded({ // . urlencoded analisa as solicitações recebidas e codificadas por url
    extended: true
    // o parâmetro {extended} nos permite ler as informações passadas pelo method POST, semelhante a um arquivo JSON com codificação URL
}))
server.use(express.static('public'))
server.use(routes)

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5050, function(){
    console.log("server is running")
})