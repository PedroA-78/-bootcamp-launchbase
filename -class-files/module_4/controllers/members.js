const fs = require('fs')
const data = require('../data.json')
const utils = require('../utils')

// Index

exports.index = function(req, res){
    return res.render("members/index", {member: data.members})
}



// Create

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for(key of keys){
        if(key == ""){
            return res.send("Please, fill all fields")
        }
    }

    let id = 1
    if (data.members.length > 0){
        id = data.members[data.members.length - 1].id + 1
    }

    data.members.push({
        id,
        ...req.body,
        birth: Date.parse(req.body.birth)
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Write file error!")
        }
        return res.redirect("/members")
    })
}

// Show

exports.show = function(req, res){
    const {id} = req.params

    const foundMember = data.members.find(function(member){
        return member.id == id
    })

    if(!foundMember){
        return res.send("Member not found!")
    }

    const date = new Date(foundMember.created_at)
    const member = {
        ...foundMember,
        age: utils.age(foundMember.birth)
    }

    return res.render("members/show", {member})
}

// edit 

exports.edit = function(req, res){
    const {id} = req.params

    const foundMember = data.members.find(function(member){
        return member.id == id
    })

    if(!foundMember){
        return res.send("Member not found!")
    }

    const member = {
        ...foundMember,
        birth: utils.date(foundMember.birth)
    }

    return res.render(`members/edit`, {member})
}

// Update

exports.put = function(req, res){
    const {id} = req.body
    let index = 0

    const foundMember = data.members.find(function(member, foundIndex){
        if(member.id == id){
            index = foundIndex
            return true
        }
    })

    if(!foundMember){
        return res.send("Member not found!")
    }

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Write file error!")
        }
        return res.redirect(`/members/${id}`)
    })
}

// Delete

exports.delete = function(req, res){
    const {id} = req.body

    const filteredMembers = data.members.filter(function(member){
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Write file error!")
        }
        return res.redirect("/members")
    })
}
