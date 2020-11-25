const modal = document.querySelector(".modal_overlay")

const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id")
        modal.classList.add("active")
        modal.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    })
}

document.querySelector(".close_button").addEventListener("click", function(){
    modal.classList.remove("active")
    document.querySelector(".modal_frame").classList.remove("max")
    modal.querySelector("iframe").src = ""
})

document.querySelector(".max_button").addEventListener("click", function(){
    document.querySelector(".modal_frame").classList.toggle("max")
})