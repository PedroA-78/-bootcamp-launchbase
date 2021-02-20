const express = require('express')
const routes = express.Router()

// Instructors

const instructors = require('./controllers/instructors')

// Route (/)
routes.get("/", function(req, res){
    return res.redirect("/instructors")
})

// Route (index)
routes.get("/instructors", instructors.index)

// Route (create)
routes.get("/instructors/create", function(req, res){
    return res.render('instructors/create')
})

// Route (post)
routes.post("/instructors", instructors.post)

// Route (show)
routes.get("/instructors/:id", instructors.show)

// Route (edit)
routes.get("/instructors/:id/edit", instructors.edit)

// Route (put)
routes.put("/instructors", instructors.put)

// Route (delete)
routes.delete("/instructors", instructors.delete)



// Members

const members = require('./controllers/members')

// Route (/)
routes.get("/", function(req, res){
    return res.redirect("/members")
})

// Route (index)
routes.get("/members", members.index)

// Route (create)
routes.get("/members/create", function(req, res){
    return res.render('members/create')
})

// Route (post)
routes.post("/members", members.post)

// Route (show)
routes.get("/members/:id", members.show)

// Route (edit)
routes.get("/members/:id/edit", members.edit)

// Route (put)
routes.put("/members", members.put)

// Route (delete)
routes.delete("/members", members.delete)



module.exports = routes