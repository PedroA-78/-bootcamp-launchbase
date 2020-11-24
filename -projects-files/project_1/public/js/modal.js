const modal = document.querySelector(".modalOverlay")

const cards = document.querySelectorAll(".card_RecCont")

for (let card of cards) {
    const imgSrc = card.querySelector(".thumbContainer_RecCont img").getAttribute("src")
    const title = card.querySelector(".recipeTitle_RecCont").textContent
    const author = card.querySelector(".recipeAuthor_RecCont span").textContent
    card.addEventListener("click", function(){
        modal.querySelector(".thumbContainer_ModCon img").src = `${imgSrc}`
        modal.querySelector(".recipeTitle_ModCon").textContent = `${title}`
        modal.querySelector(".recipeAuthor_ModCon span").textContent = `${author}`
        modal.classList.add("active")
    })
}

document.querySelector(".closeButton").addEventListener("click", function(){
    modal.classList.remove("active")
})