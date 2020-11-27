const modal = document.querySelector(".modal_overlay")

const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id")
        window.location.href = `/contents/${postId}`
    })
}