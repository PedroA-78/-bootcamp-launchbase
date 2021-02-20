module.exports.lastId = function(arr){
    if (arr.length > 0){
        return arr[arr.length - 1].id + 1
    } else {
        return 1
    }
}

module.exports.age = function(ts){
    const crrDate = new Date()
    const birth = new Date(ts)

    let age = crrDate.getFullYear() - birth.getUTCFullYear()

    const month = crrDate.getMonth() - birth.getUTCMonth()
    
    if (month < 0){
        age -= 1
    } else if (month == 0 && crrDate.getDate() < birth.getUTCDate()){
        age -= 1
    }

    return age
}

module.exports.since = function(ts){
    const date = new Date(ts)

    return (date.getUTCDate() < 10 ? "0" + date.getUTCDate().toString() : date.getUTCDate()) + "/" + (date.getUTCMonth() < 10 ? "0" + (date.getUTCMonth() + 1).toString() : date.getUTCDate() + 1)  + "/" + date.getUTCFullYear()
}

module.exports.date = function(ts){
    const date = new Date(ts)

    const day = `0${date.getUTCDate()}`.slice(-2)
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const year = date.getUTCFullYear()

    return `${year}-${month}-${day}`
}

// module.exports.checkId = function(checkId, arr){
//     for (i in arr){
//         if (checkId == arr[i].id){
//             return true
//         }
//     }

//     return false
// }