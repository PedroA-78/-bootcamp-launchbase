const cards = Array.from(document.querySelectorAll(".cardRecipes"))

for (let card of cards){
    card.addEventListener("click", function(){
        window.location = `recipes/${cards.indexOf(card)}`
    })
}