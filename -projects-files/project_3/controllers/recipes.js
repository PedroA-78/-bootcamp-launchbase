const fs = require('fs')
const data = require('../data.json')

// Index

exports.index = function(req, res){
    const recipe = new Array

    for (let i = 0; i < data.recipes.length; i++){
        recipe.push({
            id: i,
            ...data.recipes[i]
        })
    }

    return res.render('admin/index', {recipe})
}

// Create

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (let key of keys){
        if (req.body[key] == ""){
            return res.send("Please, fill all fields.")
        }
    }

    data.recipes.push({
        ...req.body
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if (err){
            return res.send("Write file erro!")
        }
        return res.redirect("/admin/recipes")
    })
}

// Show

exports.show = function(req, res){
    const {id} = req.params

    const recipe = {
        id: id,
        ...data.recipes[id]
    }

    if (!recipe){
        return res.send("Recipe not found!")
    }
    
    return res.render('admin/show', {recipe})
}

// Edit

exports.edit = function(req, res){
    const {id} = req.params

    const recipe = {
        id: id,
        ...data.recipes[id]
    }

    if (!recipe){
        return res.send("Recipe not found!")
    }

    return res.render('admin/edit', {recipe})
}

// Update

exports.put = function(req, res){
    const {id} = req.body

    const recipe = {
        image: req.body.image,
        title: req.body.title,
        author: req.body.author,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation,
        information: req.body.information
    }

    // console.log(isEquals(recipe.ingredients, data.recipes[id].ingredients))
    // console.log(recipe.information == data.recipes[id].information)
    // console.log(recipe.ingredients[0] + data.recipes[id].ingredients[0])

    if (recipe.image == data.recipes[id].image
        && recipe.title == data.recipes[id].title
        && recipe.author == data.recipes[id].author 
        && isEquals(recipe.ingredients, data.recipes[id].ingredients) 
        && isEquals(recipe.preparation, data.recipes[id].preparation)
        && recipe.information == data.recipes[id].information){
        return res.redirect(`/admin/recipes/${id}`)
    } else {
        data.recipes[id] = recipe

        fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
            if (err){
                return res.send("Write file error!")
            }
            return res.redirect(`/admin/recipes/${id}`)
        }) 
    }
}

// Delete

exports.delete = function(req, res){
    const {id} = req.body
    let recipes = new Array

    for (let recipe of data.recipes){
        if (recipe != data.recipes[id]){
            recipes.push(recipe)
        }
    }

    data.recipes = recipes

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if (err){
            return res.send("Write file error!")
        }
        return res.redirect("/admin/recipes")
    })
}

function isEquals(Array1, Array2){
    if (Array1.length != Array2.length){
        return false
    } else {
        for (let i = 0; i < Array2.length; i++){
            if (Array1[i] != Array2[i]){
                return false
            }
        }
        return true
    }
}