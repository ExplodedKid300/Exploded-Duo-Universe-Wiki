// Scroll-to-top button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerText = "↑ Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "10px";
scrollToTopButton.style.backgroundColor = "#2d5d9d";
scrollToTopButton.style.color = "white";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.display = "none";

document.body.appendChild(scrollToTopButton);

// Show button on scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to top when clicked
scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Light and Dark Modes
const themeToggleButton = document.createElement("button");
themeToggleButton.id = "theme-toggle";
themeToggleButton.ariaLabel = "Toggle light and dark mode";

const themeIcon = document.createElement("span");
themeIcon.id = "theme-icon";
themeToggleButton.appendChild(themeIcon);

themeToggleButton.style.position = "fixed";
themeToggleButton.style.top = "20px";
themeToggleButton.style.right = "20px";
themeToggleButton.style.fontSize = "1.5rem";
themeToggleButton.style.background = "none";
themeToggleButton.style.border = "none";
themeToggleButton.style.cursor = "pointer";
themeToggleButton.style.color = "var(--text-color)";
themeToggleButton.style.transition = "transform 0.3s ease, color 0.3s ease";

document.body.appendChild(themeToggleButton);

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "☀️"; // Light theme icon
} else {
    themeIcon.textContent = "🌙"; // Dark theme icon
}

themeToggleButton.addEventListener("click", function () {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    themeIcon.textContent = isDarkMode ? "☀️" : "🌙";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Additional debug log to check if script is running
console.log("Theme Toggle script loaded successfully");

// Search functionality
document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("search-bar").value.toLowerCase();
    const cards = document.querySelectorAll(".character-card");

    cards.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();
        if (name.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
