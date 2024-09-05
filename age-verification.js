document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    yesButton.addEventListener('click', function() {
        localStorage.setItem('ageVerified', 'true');
        window.location.href = 'home.html'; // Redirect to the main home page
    });

    noButton.addEventListener('click', function() {
        alert('You must be 21 or older to enter this site.');
    });

    // Redirect to home if age is already verified
    if (localStorage.getItem('ageVerified') === 'true') {
        window.location.href = 'home.html';
    }
});
