function birth(timestamp){
    const currentDate = new Date()
    const birth = new Date(timestamp) // Passando como parâmetro um timestamp fica disponível as opções de get and set para serem trabalhadas

    let age = currentDate.getFullYear() - birth.getFullYear()

    const month = currentDate.getMonth() - birth.getMonth()

    if (month < 1 && currentDate.getDate() < birth.getDate()) {
        age -= 1
    }

    return age
}