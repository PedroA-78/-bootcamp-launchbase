const express = require('express')
const routes = express.Router() // .Router(), podemos considerar como um mini Express sem todas suas features, apenas o roteamente. Então ele não traz configurações ou views, mas provê as APIs de roteamento como .use(), .get(), .param() e route().
const instructors = require('./instructors')

routes.get("/", function(req, res){
    return res.redirect("instructors") // .redirect é um método de resposta que resulta no redirecionamento para a url especificada
})

routes.get("/instructors", instructors.index)

routes.get("/instructors/create", function(req, res){
    return res.render("instructors/create")
})

routes.get("/instructors/:id", instructors.show)

routes.get("/instructors/:id/edit", instructors.edit)

routes.post("/instructors", instructors.post)

// HTTP VERBS
// GET : Receber RESOURCE
// POST : Criar ou Salvar um RESOURCE
// PUT : Atualizar RESOURCE
// DELETE : Deletar RESOURCE


routes.put("/instructors", instructors.put)

routes.delete("/instructors", instructors.delete)

routes.get("/members", function(req, res){
    return res.render("members")
})

module.exports = routes