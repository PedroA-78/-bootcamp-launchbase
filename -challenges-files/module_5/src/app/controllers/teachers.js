const utils = require('../utils')


module.exports = {
    index(req, res){
        for(let i = 0; i < data.teachers.length; i++){
            data.teachers[i].sub = data.teachers[i].subject.split(", ")
        }
    
        return res.render('teachers/index', {teacher: data.teachers})
    },
    post(req, res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }
    
        let {avatar_url, name, birth, schooling, modality, subject} = req.body
    
        const id = selectID()
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
    },
    show(req, res){
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
    },
    edit(req, res){
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
    },
    put(req, res){
        const {id} = req.body
        let index = 0
    
        const foundTeacher = data.teachers.find(function(teacher, foundIndex){
            if(teacher.id == id){
                index = foundIndex
                return true
            }
        })
    
        if(!foundTeacher){
            return res.send("Teacher not found!")
        }
    
        const teacher = {
            ...foundTeacher,
            ...req.body,
            id: parseInt(req.body.id),
            birth: Date.parse(req.body.birth)
        }
    
        data.teachers[index] = teacher
    
        fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
            if(err){
                return res.send("Write file error!")
            }
    
            return res.redirect(`/teachers/${id}`)
        })
    },
    delete(req, res){
        const {id} = req.body

        const filteredTeacher = data.teachers.filter(function(teacher){
            return teacher.id != id
        })
    
        data.teachers = filteredTeacher
    
        fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
            if(err){
                return res.send("Write file error!")
            }
    
            return res.redirect("/teachers")
        })
    }
    
}

function selectID(){
    if(data.teachers.length == 0){
        return 1
    } else {
        const lastTeacher = data.teachers.length - 1
        const nextID = parseInt(data.teachers[lastTeacher].id + 1)

        return nextID
    }
}