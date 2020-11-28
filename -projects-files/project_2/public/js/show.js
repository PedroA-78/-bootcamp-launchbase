let btnIngredients = document.getElementById("btnIngredients")
let btnSteps = document.getElementById("btnSteps")
let btnInformation = document.getElementById("btnInformation")

const ingredientsList = document.querySelector(".ingredientsList")
btnIngredients.addEventListener("click", function(){
    changeTextContent(btnIngredients, ingredientsList)
    toggleUnshow(ingredientsList)
})

const stepsList = document.querySelector(".stepsList")
btnSteps.addEventListener("click", function(){
    changeTextContent(btnSteps, stepsList)
    toggleUnshow(stepsList)
})

const addInfo = document.querySelector(".addInfo")
btnInformation.addEventListener("click", function(){
    changeTextContent(btnInformation, addInfo)
    toggleUnshow(addInfo)
})

function changeTextContent(button, list){
    if(!list.classList.contains("unshow")){
        button.textContent = "Mostrar"
    } else {
        button.textContent = "Esconder"
    }
}

function toggleUnshow(list){
    list.classList.toggle("unshow")
}