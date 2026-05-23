const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
"Last Modified: " + document.lastModified;


/* Hamburguer button */

const hamBtn = document.querySelector("#ham-btn");
const nav = document.querySelector("#nav-bar");

hamBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamBtn.classList.toggle("show");
}); 