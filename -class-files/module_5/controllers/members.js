const fs = require('fs')
const data = require('../data.json')
const utilities = require('../utilities')

// Index

module.exports.index = function(req, res){
    let data_aux = new Array

    for (let i in data.members){
        data_aux.push({
            id: data.members[i].id,
            avatar_url: data.members[i].avatar_url,
            name: data.members[i].name,
            email: data.members[i].email,
            weight: data.members[i].weight,
            height: data.members[i].height,
        })
    }

    return res.render("members/index", {members: data_aux})
}

// Post

module.exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (let key of keys){
        if (req.body[key] == ""){
            return res.send("Please, fill all fields!")
        }
    }

    data.members.push({
        id: utilities.lastId(data.members),
        ...req.body,
        birth: Date.parse(req.body.birth)

    })

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err){
            return res.send("Write file error.")
        }
    })
    return res.redirect("/members")
}

// Show

module.exports.show = function(req, res){
    const {id} = req.params

    const foundMember = data.members.find(function(member){
        return member.id == id
    })

    if (!foundMember){
        return res.send("Member not found!")
    }

    const member = {
        ...foundMember,
        birth: utilities.age(foundMember.birth)
    }

    return res.render("members/show", {member})
}

// Edit

module.exports.edit = function(req, res){
    const {id} = req.params

    const foundMember = data.members.find(function(member){
        return member.id == id
    })

    if (!foundMember){
        return res.send("Member not found!")
    }

    const member = {
        ...foundMember,
        birth: utilities.date(foundMember.birth)
    }


    return res.render("members/edit", {member})
}

// Put

module.exports.put = function(req, res){
    const {id} = req.body

    let index = 0

    const foundMember = data.members.find(function(member, foundIndex){
        if (member.id == id) {
            index = foundIndex
            return true
        }
    })

    if (!foundMember){
        return res.send("Member not found!")
    }

    const member = {
        ...foundMember,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.members[index] = member

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err){
            return res.send("Write file error!")
        }
        return res.redirect(`/members/${id}`)
    })

}

// Delete

module.exports.delete = function(req, res){
    const {id} = req.body

    const filteredMembers = data.members.filter(function(member){
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err){
            return res.send("Write file error!")
        }
        return res.redirect("/members")
    })
}