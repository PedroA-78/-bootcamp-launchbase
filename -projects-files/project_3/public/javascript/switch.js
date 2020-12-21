const btnIngredients = document.querySelector(".btnIngredients")
const ingredientsList = document.querySelector(".ingredientsList")
btnIngredients.addEventListener("click", function(){
    toggle(ingredientsList)
    changeText(btnIngredients, ingredientsList)
})

const btnPrepare = document.querySelector(".btnPrepare")
const prepareList = document.querySelector(".prepareList")
btnPrepare.addEventListener("click", function(){
    toggle(prepareList)
    changeText(btnPrepare, prepareList)
})

const btnInfo = document.querySelector(".btnInfo")
const infoList = document.querySelector(".infoList")
btnInfo.addEventListener("click", function(){
    toggle(infoList)
    changeText(btnInfo, infoList)
})

function toggle(list){
    list.classList.toggle("unshow")
}

function changeText(button, list){
    if (list.classList.contains("unshow")){
        button.textContent = "Mostrar"
    } else {
        button.textContent = "Esconder"
    }
}