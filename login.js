document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popup-container");
    const loginButton = document.getElementById("loginButton");
    const closeButton = document.querySelector(".close-btn");

    loginButton.addEventListener("click", function () {
        popupContainer.style.display = "flex";
    });

    closeButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });

    // Close popup when clicking outside the popup container
    window.addEventListener("click", function (event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });

    // Close popup when pressing the escape key
    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            popupContainer.style.display = "none";
        }
    });
});
