const utilities = require('../../lib/utilities')
const db = require('../config/db')

// Index

module.exports.index = function(req, res){
    return res.render("instructors/index")
}

// Post

module.exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (let key of keys){
        if (req.body[key] == ""){
            return res.send("Please, fill all fields!")
        }
    }

    const query = `
        insert into instructors (
            name,
            avatar_url,
            gender,
            services,
            birth,
            created_at
        ) values ($1, $2, $3, $4, $5, $6)
        returning id
    `

    const values = [
        req.body.name,
        req.body.avatar_url,
        req.body.gender,
        req.body.services,
        utilities.since(req.body.birth),
        utilities.since(Date.now())
    ]

    db.query(query, values, function(err, results){
        if (err){
            return res.send("Database write error!")
        }
        return res.redirect(`/instructors/${results.rows[0].id}`)
    })
}

// Show

module.exports.show = function(req, res){
    return
}

// Edit

module.exports.edit = function(req, res){
    return
}

// Put

module.exports.put = function(req, res){
    return
}

// Delete

module.exports.delete = function(req, res){
    return
}
