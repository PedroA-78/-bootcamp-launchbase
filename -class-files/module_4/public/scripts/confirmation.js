const formDelete = document.querySelector(".form_delete")
formDelete.addEventListener("submit", function(event){
    const confirmation =  confirm("Deseja deletar?")
    if (!confirmation){
        event.preventDefault()
    }
})