const utilities = require('../../lib/utilities')

// Index

module.exports.index = function(req, res){
let data_aux = new Array

for (i in data.instructors){
    data_aux.push({
        id: data.instructors[i].id,
        avatar_url: data.instructors[i].avatar_url,
        name: data.instructors[i].name,
        services: data.instructors[i].services.split(", ")
    })
}
return res.render('instructors/index', {instructors: data_aux})
}

// Post

module.exports.post = function(req, res){
const keys = Object.keys(req.body)

for (let key of keys){
    if (req.body[key] == ""){
        return res.send("Please, fill all fields!")
    }
}

data.instructors.push({
    id: utilities.lastId(data.instructors),
    ...req.body,
    birth: Date.parse(req.body.birth),
    create_at: Date.now()
})

fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
    if(err){
        return res.send("Write file error!")
    }
    return res.redirect("/instructors")
})

}

// Show

module.exports.show = function(req, res){
const {id} = req.params

const foundInstructor = data.instructors.find(function(instructor){
    return instructor.id == id
})

if (!foundInstructor){
    return res.send("Instructor not found!")
}

const instructor = {
    ...foundInstructor,
    birth: utilities.age(foundInstructor.birth),
    services: foundInstructor.services.split(", "),
    created_at: utilities.since(foundInstructor.create_at)
}

return res.render("instructors/show", {instructor})
}

// Edit

module.exports.edit = function(req, res){
const {id} = req.params

const foundInstructor = data.instructors.find(function(instructor){
    return instructor.id == id
})

const instructor = {
    ...foundInstructor,
    birth: utilities.date(foundInstructor.birth)
}

return res.render('instructors/edit', {instructor})
}

// Put

module.exports.put = function(req, res){
const {id} = req.body

let index = 0

const foundInstructor = data.instructors.find(function(instructor, foundIndex){
    if (instructor.id == id){
        index = foundIndex
        return true
    }
})

if (!foundInstructor){
    return res.send("Instructor not found!")
}

const instructor = {
    ...foundInstructor,
    ...req.body,
    id: Number(req.body.id),
    birth: Date.parse(req.body.birth)
}

data.instructors[index] = instructor

fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
    if (err){
        return res.send("Write file error!")
    }
})

return res.redirect(`/instructors/${id}`)
}

// Delete

module.exports.delete = function(req, res){
const {id} = req.body

const filteredInstructors = data.instructors.filter(function(instructor){
    return instructor.id != id
})

data.instructors = filteredInstructors

fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
    if (err){
        return res.send("Write file error!")
    }
})
return res.redirect("/instructors")
}
