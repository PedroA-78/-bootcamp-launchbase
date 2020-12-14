const express = require('express')
const routes = express.Router()
const functions = require('./functions')

routes.get('/', function(req, res){
    return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res){
    return res.render('teachers/index')
})

routes.get('/teachers/create', function(req, res){
    return res.render('teachers/create')
})

routes.post('/teachers', functions.post)

routes.get('/teachers/:id', functions.show)

routes.get('/teachers/:id/edit', functions.edit)

routes.put('/teachers', functions.put)

routes.delete('/teachers', functions.delete)

routes.get('/students', function(req, res){
    return res.render('students/students')
})

module.exports = routes