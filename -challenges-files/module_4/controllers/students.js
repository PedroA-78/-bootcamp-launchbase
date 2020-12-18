const { json } = require('express')
const fs = require('fs')
const data = require('../data.json')
const utils = require('../utils')



// Index

exports.index = function(req, res){
    let student = new Array

    for (let i = 0; i < data.students.length; i++){
        student.push({
            id: data.students[i].id, 
            avatar_url: data.students[i].avatar_url, 
            name: data.students[i].name, 
            mail: data.students[i].mail, 
            birth: data.students[i].birth, 
            grade: utils.grade(data.students[i].school_year), 
            workload: data.students[i].workload,
        })
    }

    console.log(student)

    return res.render("students/index", {student})
}

// Create

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (key of keys){
        if (key == ""){
            return res.send("Please, fill all fields!")
        }
    }

    let id = 1

    if (data.students.length > 0){
        id = data.students[data.students.length - 1].id + 1
    }

    data.students.push({
        id,
        ...req.body,
        birth: Date.parse(req.body.birth)
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if (err){
            return res.send("Write file error!")
        }
        return res.redirect("/students")
    })
}

// Show

exports.show = function(req, res){
    const {id} = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if (!foundStudent){
        return res.send("Student not found!")
    }

    const student = {
        ...foundStudent,
        age: utils.age(foundStudent.birth),
        grade: utils.grade(foundStudent.school_year)
    }

    return res.render("students/show", {student})
}

// Edit

exports.edit = function(req, res){
    const {id} = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if (!foundStudent){
        return res.send("Student not found!")
    }

    const student = {
        ...foundStudent,
        birth: utils.date(foundStudent.birth)
    }

    return res.render("students/edit", {student})
}

// Update

exports.put = function(req, res){
    const {id} = req.body
    let index = 0

    const foundStudent = data.students.find(function(student, studentID){
        if (student.id == id){
            index = studentID
            return true
        }
    })

    if (!foundStudent){
        return res.send("Student not found!")
    }

    const student = {
        ...foundStudent,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Write file error!")
        }
        return res.redirect(`/students/${id}`)
    })
}

// Delete

exports.delete = function(req, res){
    const {id} = req.body

    const filteredStudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Write file error!")
        }
        return res.redirect("/students")
    })
}