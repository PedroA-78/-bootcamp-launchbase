const express = require('express')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')
const routes = require('./routes')

const server = express()

server.set('view engine', 'njk')

server.use(express.static('public'))

server.use(express.urlencoded({
    extended: true
}))

server.use(methodOverride("_method"))

server.use(routes)

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5050, function(){
    console.log("server is running.")
})