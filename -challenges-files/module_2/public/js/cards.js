const cardsCllNode = document.querySelectorAll(".card_challenges")
const cardsModal = document.querySelectorAll(".card_modal")
const closeButtons = document.querySelectorAll(".close_button")
const modal = document.querySelector(".modal")

let cards = Array.from(cardsCllNode)
for (let card of cards) {
    card.addEventListener("click", function(){
        cardNum = cards.indexOf(card)
        if (cardsModal[cardNum] != undefined) {
            modal.classList.add("show_modal")
            cardsModal[cardNum].classList.add("card_show")
        }
    })
}

for (let closeButton of closeButtons) {
    closeButton.addEventListener("click", function(){
        modal.classList.remove("show_modal")
        cardsModal[cardNum].classList.remove("card_show")
    })
}