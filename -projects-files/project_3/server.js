const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.set('view engine', 'njk')

server.use(express.static('public'))

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.redirect("/home")
})

server.get("/home", function(req, res){
    return res.render('home', {recipe: data})
})

server.get("/about", function(req, res){
    return res.render('about')
})

server.get("/recipes", function(req, res){
    return res.render('recipes', {recipe: data})
})

server.get("/recipes/:id", function(req, res){
    const {id} = req.params

    const recipe = data[id]

    if (!recipe){
        return res.send("Recipe not found!")
    }

    return res.render('recipe', {recipe})
})


server.listen(5000, function(){
    console.log("server is running")
})