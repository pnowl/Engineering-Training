console.log("Engineering Training");
const modalButton = document.getElementById("modalButton");
console.log("modalButton", modalButton);

function loadData() {
    setTimeout(() => {

        console.log("data loaded");
        renderData().then((response) => {
            listElement[0].innerHTML = response;
            modalContainer.classList.toggle("hidden");

        })
    }, 1000)
};

modalButton.addEventListener("click", (event) => {
    console.log("clicked button!")
    loadData();
    document.getElementById("modalContainer").classList.toggle("hidden")
});


const closeModalButton = document.getElementsByClassName("close-modal-button").item(0)
console.log("closeModalButton", closeModalButton)

closeModalButton.addEventListener("click", function () {
    console.log("clicked close modal button!");
    const modalContainer = document.getElementById("modalContainer");

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




/*jiraTitles.forEach(myFunction)
function myFunction(jiraTitles) {
    console.log(jiraTitles);
}
 
jiraLinks.forEach(myFunction)
function myFunction(jiraLinks) {
    console.log(jiraLinks);
}*/

const jirasArray = [];

for (let i = 0; i < jiraTitles.length; i++) {
    jirasArray.push({
        link: jiraLinks[i],
        title: jiraTitles[i]
    });

}
console.log("jiraArray", jirasArray);
/*for (let i = 0; i < jiraLinks.length; i++) {
    const jiraObject = {
 
    }
    jirasArray.push(jiraObject);
    console.log("jiraObject", jiraObject);
}*/

const listElement = document.getElementsByClassName("grid-container");


function renderData() {
    return new Promise((resolve) => {
        let response = '';
        jirasArray.forEach((object) => {
            response +=                   // concatenating a string vs appending a child to the DOM
                `<li>
              <i class="bi bi-x"></i>
              <i class="bi bi-check-circle-fill"></i>
              <a href="${object.link}">${object.title}</a>
            </li>`;
        });
        resolve(response);
    })
}


modalButton.addEventListener("click", async () => {
    const response = await fetch('/getJiraTickets');
    const myJson = await response.json();
    response.then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
})