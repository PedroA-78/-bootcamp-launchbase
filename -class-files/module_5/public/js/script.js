const crrPage = window.location.pathname
const menuItems = document.querySelectorAll("header nav a")

for (let i = 0; i < menuItems.length; i++){
    if (crrPage.includes(menuItems[i].getAttribute("href"))){
        menuItems[i].classList.add("active")
    }
}