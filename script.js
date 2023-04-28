console.log("Engineering Training");
const modalButton = document.getElementById("modalButton");
console.log("modalButton", modalButton);



modalButton.addEventListener("click", (event) => {
    console.log("clicked button!")
    document.getElementById("modalContainer").classList.toggle("hidden")
});


const closeModalButton = document.getElementsByClassName("close-modal-button").item(0)
console.log("closeModalButton", closeModalButton)

closeModalButton.addEventListener("click", function () {
    console.log("clicked close modal button!");
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.classList.toggle("hidden");
});