const hambutton = document.querySelector("#home");
const navigation = document. querySelector("nav");
hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open")
})
