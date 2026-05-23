const url = "data/members.json";
const container = document.querySelector("#members");


async function getMembers() {
    try {
        container.textContent = "Loading...";

        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response failed");

        const data = await response.json();

        container.textContent = ""; 
        displayMembers(data);

    } catch (error) {
        console.error("Error loading members:", error);
        container.textContent = "Failed to load members.";
    }
}


function displayMembers(members) {
    const fragment = document.createDocumentFragment();

    members.forEach((member, index) => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        // TEXT ELEMENTS
        const name = document.createElement("h3");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const link = document.createElement("a");
        link.href = member.website;
        link.textContent = "Visit Website";
        link.target = "_blank";

        // IMAGE
        const image = document.createElement("img");
        image.src = `images/${member.image}`;
        image.alt = member.name;

       
        image.width = 80;
        image.height = 80;

     
        image.decoding = "async";


        image.loading = index < 2 ? "eager" : "lazy";

        // INFO CONTAINER
        const info = document.createElement("div");
        info.append(name, address, phone, link);

        // CARD STRUCTURE
        card.append(image, info);

        // ADD TO FRAGMENT (NOT DOM YET)
        fragment.appendChild(card);
    });

   
    container.appendChild(fragment);
}


getMembers();