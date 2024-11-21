// Scroll-to-top button
document.addEventListener("DOMContentLoaded", function () {
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
});

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
