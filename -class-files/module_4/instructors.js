const fs = require('fs') // Módulo do NodeJS para trabalhar com arquivos do sistema "File System"
const data = require('./data.json')

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

    req.body.birth = Date.parse(req.body.birth) // .parse transforma uma data padrão em timestamp
    req.body.created_at = Date.now()

    data.instructors.push(req.body)

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

// Update

// Delete