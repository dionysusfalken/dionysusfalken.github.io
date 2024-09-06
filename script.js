document.getElementById("yesBtn").addEventListener("click", function() {
    // Save the user's age verification in localStorage
    localStorage.setItem("ageVerified", "true");
    window.location.href = "home.html"; // Redirect to the homepage
});

document.getElementById("noBtn").addEventListener("click", function() {
    window.location.href = "https://www.google.com"; // Redirect to another page
});

// Check if the user has already verified their age
if (localStorage.getItem("ageVerified") === "true") {
    window.location.href = "home.html"; // Redirect to homepage if already verified
}
