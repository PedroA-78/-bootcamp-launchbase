const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("layout")
})

server.get("/challenges", function(req, res){
    return res.render("challenges")
})

server.get("/contents", function(req, res){
    return res.render("contents")
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.use(function(req, res){
    res.status(404).render("not_found.njk")
})

server.listen(5000, function(){
    console.log("server is running")
})