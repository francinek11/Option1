const animal_buttons = document.getElementsByName("animal-button")
const text = document.querySelector("#text")
const photo =  document.querySelector("#photo")

animal_buttons.forEach(button => {
    button.addEventListener("change", event => {
        
        
        text.innerHTML = "Here's a picture of a " + button.value
        photo.src = button.value + ".jpeg"




})

})
