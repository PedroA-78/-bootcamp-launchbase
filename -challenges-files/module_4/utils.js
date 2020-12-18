module.exports.age = function(timestamp) {
    const currentDate = new Date()
    const birth = new Date(timestamp)

    let age = currentDate.getFullYear() - birth.getUTCFullYear()

    const month = currentDate.getMonth() - birth.getUTCMonth()

    if (month < 1 && currentDate.getDate() < birth.getUTCDate()) {
        age -= 1
    }
    
    return age
}

module.exports.date = function(timestamp){
    const date = new Date(timestamp)

    const year = `${date.getUTCFullYear()}`
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return `${year}-${month}-${day}`
}

module.exports.grade = function(grade){
    let info = null

    switch(grade) {
        case "5EF":
            info = "5° ano - ensino fundametal I"
        break
        case "6EF":
            info = "6° ano - ensino fundametal II"
        break
        case "7EF":
            info = "7° ano - ensino fundametal II"
        break
        case "8EF":
            info = "8° ano - ensino fundametal II"
        break
        case "9EF":
            info = "9° ano - ensino fundametal II"
        break
        case "1EM":
            info = "1° ano - ensino médio"
        break
        case "2EM":
            info = "2° ano - ensino médio"
        break
        case "3EM":
            info = "3° ano - ensino médio"
        break
    }

    return info
}