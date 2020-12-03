const express = require('express')
const routes = express.Router() // .Router(), podemos considerar como um mini Express sem todas suas features, apenas o roteamente. Então ele não traz configurações ou views, mas provê as APIs de roteamento como .use(), .get(), .param() e route().
const instructors = require('./instructors')

routes.get("/", function(req, res){
    return res.redirect("instructors") // .redirect é um método de resposta que resulta no redirecionamento para a url especificada
})

routes.get("/instructors", function(req, res){
    return res.render("instructors/index")
})

routes.get("/instructors/create", function(req, res){
    return res.render("instructors/create")
})

routes.post("/instructors", instructors.post)

routes.get("/members", function(req, res){
    return res.render("members")
})

module.exports = routes