const modal = document.querySelector(".modalOverlay")

const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id")
        modal.classList.add("active")
        modal.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    })
}

document.querySelector(".closeButton").addEventListener("click", function(){
    modal.classList.remove("active")
    document.querySelector(".modalFrame").classList.remove("max")
    modal.querySelector("iframe").src = ""
})

document.querySelector(".maxButton").addEventListener("click", function(){
    document.querySelector(".modalFrame").classList.toggle("max")
})