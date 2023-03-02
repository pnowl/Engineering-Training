console.log("Engineering Training");
const modalButton = document.getElementById("modalButton");
console.log("modalButton", modalButton);



modalButton.addEventListener("click", (event) => {
    console.log("clicked button!")
    document.getElementById("modalContainer").classList.toggle("hidden")
});
