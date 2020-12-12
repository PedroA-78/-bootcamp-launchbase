const fs = require('fs')
const data = require('./data.json')
const utils = require('./utils')

// Create

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (key of keys) {
        if(req.body[key] == "") {
            return res.send("Please, fill all fields!")
        }
    }

    let {avatar_url, name, birth, schooling, modality, subject} = req.body

    const id = Number(data.teachers.length + 1)
    birth = Date.parse(birth)
    const created_at = Date.now()

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        schooling,
        modality,
        subject,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err) {
            return res.send("Write file error!")
        }

        return res.redirect("/teachers")

    })
}

// Show

exports.show = function(req, res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teachers){
        return teachers.id == id
    })

    if (!foundTeacher){
        return res.send("Teacher not found!")
    }

    const date = new Date(foundTeacher.created_at)
    const teacher = {
        ...foundTeacher,
        age: utils.age(foundTeacher.birth),
        subject: foundTeacher.subject.split(", "),
        created_at: `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
    }

    return res.render("teachers/show", {teacher})
}

// Edit

exports.edit = function(req, res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teachers){
        return teachers.id == id
    })

    if (!foundTeacher){
        return res.send("Teacher not found!")
    }

    const teacher = {
        ...foundTeacher,
        birth: utils.date(foundTeacher.birth)
    }

    return res.render("teachers/edit", {teacher})
}

// Update

// Delete