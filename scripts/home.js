import { learningResources } from "../data/resources.mjs";

const resourceContainer = document.querySelector('#resourceCards');
const visitorMessage = document.querySelector("#visitor-message");
const featuredResources = learningResources.slice(0, 4);


const cards = featuredResources.map(resource => `
  <article class="resource-card">
    <img
      class="card-gif"
      src="${resource.icon}"
      alt="${resource.name}"
    >
    
    <h3>${resource.name}</h3>
    <p>${resource.description}</p>
    <a href="${resource.url}" target="_blank">
      start
    </a>
  </article>
`).join("");

resourceContainer.innerHTML = cards;




function displayVisitMessage() {

    const lastVisit =
        localStorage.getItem("lastVisit");

    const currentVisit =
        Date.now();

    if (!lastVisit) {

        visitorMessage.textContent =
            "👋Welcome! Let us know if you have any questions.";

    } else {

        const millisecondsBetweenVisits =
            currentVisit - Number(lastVisit);

        const daysBetweenVisits =
            Math.floor(
                millisecondsBetweenVisits /
                (1000 * 60 * 60 * 24)
            );

        if (daysBetweenVisits < 1) {

            visitorMessage.textContent =
                "😎 Back so soon! Awesome!";

        } else if (daysBetweenVisits === 1) {

            visitorMessage.textContent =
                "You last visited 1 day ago.";

        } else {

            visitorMessage.textContent =
                `📅 You last visited ${daysBetweenVisits} days ago.`;
        }
    }

    localStorage.setItem(
        "lastVisit",
        currentVisit
    );
}


// Initialize Page
displayVisitMessage();