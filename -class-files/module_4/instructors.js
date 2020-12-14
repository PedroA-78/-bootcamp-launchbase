const fs = require('fs') // Módulo do NodeJS para trabalhar com arquivos do sistema "File System"
const data = require('./data.json')
const utils = require('./utils')

// Create

exports.post = function(req, res){
    // Aqui nós definimos o caminho que o post deve tomar

    const keys = Object.keys(req.body)
    // Object é um tipo de constructor que é um método especial para criar e inicializar um objeto
    // .keys é um método que retorna um novo Array que contém as chaves para cada index do array.

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields")
        }
    }

    let {avatar_url, birth, name, services, gender} = req.body

    birth = Date.parse(birth) // .parse transforma uma data padrão em timestamp
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        gender,
        birth,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        // .writeFile é um método para gravar algo em um arquivo os parâmetros são (o caminho do arquivo onde vai ser gravado, os dados, e opcionalmente uma callback function)

        // JSON é um construtor para arquivos .JSON
        // .stringify é um método que converte valores javascript para um String JSON *No parâmetro você passa os dados a serem covertidos*
        if (err) {
            return res.send("Write file error!")
        }

        return res.redirect("/instructors")
    })

    // return res.send(req.body)
}

// Show 

exports.show = function(req, res){
    const {id} = req.params

    const foundInstructors = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructors) {
        return res.send("Instructor not found!")
    }

    const date = new Date(foundInstructors.created_at)
    const instructor = {
        ...foundInstructors,
        age: utils.age(foundInstructors.birth),
        services: foundInstructors.services.split(","),
        created_at: date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCFullYear()
    }

    return res.render("instructors/show", {instructor})
}

// edit

exports.edit = function(req, res){
    const {id} = req.params

    const foundInstructors = data.instructors.find(function(instructors){
        return instructors.id == id
    })

    if (!foundInstructors) {
        return res.send("Instructor not found!")
    }

    const instructor = {
        ...foundInstructors,
        birth: utils.date(foundInstructors.birth)
    }

    return res.render("instructors/edit", {instructor})
}

// Update

exports.put = function(req, res){
    const {id} = req.body

    let index = 0

    const foundInstructor = data.instructors.find(function(instructor, foundIndex){
        if(instructor.id == id){
            index = foundIndex
            return true
        }
    })

    if(!foundInstructor){
        return res.send("Instructor not found!")
    }

    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth)
    }

    data.instructors[index] = instructor

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Write file error!")
        }

        return res.redirect(`/instructors/${id}`)
    })
}

// Delete

exports.delete = function(req, res){
    const {id} = req.body

    const filteredIndex = data.instructors.filter(function(instructor){
        return instructor.id != id
    })

    data.instructors = filteredIndex

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Write file error!")
        }

        return res.redirect("/instructors")
    })
}