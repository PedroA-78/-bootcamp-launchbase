document.querySelector(".newIngredient").addEventListener("click", function(){
    let fields = document.querySelectorAll(".ingredients")
    
    addField(fields)

    fields = document.querySelectorAll(".ingredients")
    fields[fields.length - 1].focus()
})

document.querySelector(".newStep").addEventListener("click", function(){
    let fields = document.querySelectorAll(".preparation")
    
    addField(fields)

    fields = document.querySelectorAll(".preparation")
    fields[fields.length - 1].focus()
})

function addField(fields){
    const newField = fields[fields.length - 1].cloneNode(true)
    if (newField.value == ""){
        return false
    }
    
    newField.value = ""
    
    add(fields[0].parentNode, newField)
}

function add(fieldList, field){
    fieldList.appendChild(field)
}