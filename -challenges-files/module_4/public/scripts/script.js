const currentPage = window.location.pathname
const menuItems = document.querySelectorAll("nav a")

console.log(currentPage)

for (let i = 0; i < menuItems.length; i++){
    if (currentPage.includes(menuItems[i].getAttribute("href"))){
        menuItems[i].classList.add("active")
    }
}