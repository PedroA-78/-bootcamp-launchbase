const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".cardRecipes")

for (let card of cards){
    card.addEventListener("click", function(){
        modal.querySelector(".thumbModal img").src = card.querySelector(".thumbRecipes img").getAttribute("src")
        modal.querySelector(".titleModal").textContent = card.querySelector(".titleRecipes").textContent
        modal.querySelector(".authorModal span").textContent = card.querySelector(".authorRecipes span").textContent
        document.querySelector(".modalOverlay").classList.add("active")
    })
}

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".modalOverlay").classList.remove("active")
})