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