// ================================
// 1. DARK / LIGHT MODE
// ================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }

});


// ================================
// 2. PROJECT FILTERING
// ================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.filter;

        projectCards.forEach((project) => {

            const projectCategory = project.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});


// ================================
// 3. CONTACT FORM VALIDATION
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (name === "" || email === "" || message === "") {

        showMessage(
            "Please fill in all fields.",
            "danger"
        );

        return;
    }

    // Check email format
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        showMessage(
            "Please enter a valid email address.",
            "danger"
        );

        return;
    }

    // Successful validation
    showMessage(
        "Thank you! Your message has been submitted successfully.",
        "success"
    );

    contactForm.reset();

});


// Function to display dynamic messages
const showMessage = (message, type) => {

    formMessage.innerHTML =
        `<div class="alert alert-${type}" role="alert">
            ${message}
        </div>`;

};


// ================================
// 4. ES6 ARRAY, OBJECT & LOOP
// ================================

const skills = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "PostgreSQL"
];

const student = {
    name: "Deekshitha Nethi",
    course: "Computer Science Engineering",
    location: "Hyderabad"
};

// ES6 loop
skills.forEach((skill) => {
    console.log(`Skill: ${skill}`);
});

console.log(student);