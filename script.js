// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add animation to the "Get Beta Access" button
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("mouseover", function () {
        ctaButton.style.backgroundColor = "#555555";
    });

    ctaButton.addEventListener("mouseout", function () {
        ctaButton.style.backgroundColor = "#000000";
    });
});
