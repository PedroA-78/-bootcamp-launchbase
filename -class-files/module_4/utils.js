module.exports.age = function (timestamp){
    const currentDate = new Date()
    const birth = new Date(timestamp) // Passando como parâmetro um timestamp fica disponível as opções de get and set para serem trabalhadas

    let age = currentDate.getUTCFullYear() - birth.getUTCFullYear()

    const month = currentDate.getUTCMonth() - birth.getUTCMonth()
    if (month < 1 && currentDate.getUTCDate() < birth.getUTCDate()) {
        age -= 1
    }

    return age
}

module.exports.date = function (timestamp){
    const birth = new Date(timestamp)

    const year = `${birth.getUTCFullYear()}`
    const month = `0${birth.getUTCMonth() + 1}`.slice(-2)
    const day = `0${birth.getUTCDate()}`.slice(-2)

    return `${year}-${month}-${day}`
}