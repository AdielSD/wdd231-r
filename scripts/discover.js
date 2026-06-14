import { places } from "../data/discover.mjs";


// DOM Elements


const discoverGrid = document.querySelector("#discover-grid");
const visitorMessage = document.querySelector("#visitor-message");


// Cards


function displayPlaces(placesList) {

    discoverGrid.innerHTML = "";

    placesList.forEach((place, index) => {

        const card = document.createElement("section");

        card.classList.add("discover-card",`card${index + 1}`);

        card.innerHTML = `
            <h2>${place.name}</h2>

            <figure>
                <img
                    src="${place.image}"
                    alt="${place.name}"
                    width="300"
                    height="200"
                    loading="lazy">
            </figure>

            <address>
                ${place.address}
            </address>

            <p>
                ${place.description}
            </p>

            <button>
                Learn More
            </button>
        `;

        discoverGrid.appendChild(card);
    });
}


// Last Visit Message


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


displayPlaces(places);
displayVisitMessage();