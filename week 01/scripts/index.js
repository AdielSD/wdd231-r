/* Hamburguer bttn */
const navbttn = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbttn.addEventListener('click', () => {
    navbttn.classList.toggle('show');
    navBar.classList.toggle('show');
});




/* DATE CODE */

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
"Last Modified: " + document.lastModified;