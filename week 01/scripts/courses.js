import { coursesinfo } from "../data/coursesinfo.js";

// Course Elements
const courseContainer = document.querySelector("#courses");
const creditsContainer = document.querySelector("#credits");

// Dialog Elements
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

// Dialog Close Button
myclose.addEventListener("click", () => {
    mydialog.close();
});

// Render Course Cards
function renderCourseCards(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("section");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
        `;

        card.addEventListener("click", () => {
            showCourseDetails(course);
        });

        courseContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditsContainer.textContent = totalCredits;
}

// Show Dialog
function showCourseDetails(course) {

    mytitle.textContent = `${course.subject} ${course.number}`;

    myinfo.innerHTML = `
        <strong>${course.title}</strong><br>
        Credits: ${course.credits}<br>
        Technology: ${course.technology}<br>
        ${course.description}
    `;

    mydialog.showModal();
}

// Initial Load
renderCourseCards(coursesinfo);

// Filter Buttons
document.querySelector("#all").addEventListener("click", () => {
    renderCourseCards(coursesinfo);
});

document.querySelector("#wdd").addEventListener("click", () => {

    const wddCourses = coursesinfo.filter(course =>
        course.subject === "WDD"
    );

    renderCourseCards(wddCourses);
});

document.querySelector("#cse").addEventListener("click", () => {

    const cseCourses = coursesinfo.filter(course =>
        course.subject === "CSE"
    );

    renderCourseCards(cseCourses);
});