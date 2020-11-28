const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const data =  require('./data')
const recipes = data.recipes

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    res.render("home", {recipes})
})

server.get("/about", function(req, res){
    res.render("about")
})

server.get("/recipes", function(req, res){
    res.render("recipes", {recipes})
})

server.get("/recipes/:id", function(req, res){
    const id = req.params.id
    const recipe = recipes.find(function(recipe){
        return recipe.id == id
    })
    
    if(!recipe){
        return res.send("Recipe not found!")
    }

    return res.render("recipe", {recipe})
})

server.listen(5000, function(){
    console.log("Server is running")
})