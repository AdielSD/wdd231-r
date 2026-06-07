// timestamp when page loads
document.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.querySelector("#timestamp");
  timestamp.value = new Date().toISOString();
});

/* MODALS */
const links = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");

// open modal
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.dataset.modal;
    document.getElementById(id).style.display = "block";
  });
});

// close modal
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// click outside modal closes it
window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});