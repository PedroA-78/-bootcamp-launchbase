const modal = document.querySelector(".modalOverlay")

const cards = document.querySelectorAll(".card_RecCont")

for (let card of cards) {
    card.addEventListener("click", function(){
        const recipeId = card.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`
    })
}