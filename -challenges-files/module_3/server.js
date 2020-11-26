const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require("./data")

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("layout")
})

server.get("/challenges", function(req, res){
    return res.render("challenges", {titles: data.challenges})
})

server.get("/contents", function(req, res){
    return res.render("contents", {infos: data.posts})
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