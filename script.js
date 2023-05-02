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

const jiraTitles = new Array(
    "Create a public repository under your GitHub account",
    "Create a new script file, and import it into index.html and add a console log",
    "JavaScript: Variables",
    "JavaScript: Event Listeners - Add Toggle Button Inside of Modal",
    "JavaScript: Functions - Write a function to toggle hidden class on modal"
)
const jiraLinks = new Array(
    "https://totalwine.atlassian.net/browse/TT-2",
    "https://totalwine.atlassian.net/browse/TT-16",
    "https://totalwine.atlassian.net/browse/TT-17",
    "https://totalwine.atlassian.net/browse/TT-18",
    "https://totalwine.atlassian.net/browse/TT-19"
)

console.log("jiraTitles", jiraTitles);
console.log("jiraLinks", jiraLinks);