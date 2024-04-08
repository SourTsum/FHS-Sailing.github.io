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

function handleCredentialResponse(googleUser) {
    var profile = googleUser.getBasicProfile();
    var imageUrl = profile.getImageUrl();
    var name = profile.getName();

    // Log user information to the console
    console.log('Name: ' + name);
    console.log('Image URL: ' + imageUrl);

    // You can also return the user's name and image URL if needed
    return { name: name, imageUrl: imageUrl };
}

function onSignIn(googleUser) {
    var userInfo = getUserInfo(googleUser);
    // You can use userInfo.name and userInfo.imageUrl as needed

    // Call any other functions or perform actions after successful login
}
