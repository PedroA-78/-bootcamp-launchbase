const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require("./data")
const posts = data.posts

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

server.get("/contents/:id", function(req, res){
    const id = req.params.id

    const post = posts.find(function(post){
        return post.id == id
    })

    if(!post){
        return res.send("Não vai da não!")
    }

    return res.render("post", {info: post})
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