const express = require('express')
const routes = express.Router()
const data = require('./data.json')
const recipes = require('./controllers/recipes')

routes.get("/", function(req, res){
    return res.redirect("/home")
})

// DEFAULT

routes.get("/home", function(req, res){
    return res.render('default/home', {recipe: data.recipes})
})

routes.get("/about", function(req, res){
    return res.render('default/about')
})

routes.get("/recipes", function(req, res){
    return res.render('default/recipes', {recipe: data.recipes})
})

routes.get("/recipes/:id", function(req, res){
    const {id} = req.params

    const recipe = data.recipes[id]

    if (!recipe){
        return res.send("Recipe not found!")
    }

    return res.render('default/recipe', {recipe})
})


// ADMIN

routes.get("/admin", function(req, res){
    return res.redirect("/admin/recipes")
})

routes.get("/admin/recipes", recipes.index)

routes.get("/admin/recipes/create", function(req, res){
    return res.render('admin/create')
})

routes.post("/admin/recipes", recipes.post)

routes.get("/admin/recipes/:id", recipes.show)

routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.put("/admin/recipes", recipes.put)

routes.delete("/admin/recipes", recipes.delete)

module.exports = routes