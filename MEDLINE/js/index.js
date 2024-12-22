// For nav bar
function show_nav(){
    document.getElementById("hidden_nav").classList.toggle("show");
    document.querySelector(".bars1").classList.toggle("navturn") //Turns the bars
}



// This is for the form

function send() {

    var email = document.getElementById(`email`).value;
    var value = document.getElementById(`email`).value;

    if (email == value) {

        localStorage.setItem(`email`, value)
        document.getElementById(`email`).value.reset();
        document.getElementById(`thanks`).style.display = `none`;
    }
}

//Function for activating and deactivating darkmode

//The rolling effect on the darkmode button
document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.querySelector('.dark');
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.bottom = '20px';
    darkModeButton.style.right = '-100px'; // Initially hidden
    darkModeButton.style.transition = 'transform 1s ease, right 1s ease';

    darkModeButton.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        const body = document.body;
        const darkModeEnabled = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
    }

    window.addEventListener('scroll', () => {
        const scrollThreshold = 300;
        if (window.scrollY > scrollThreshold) {
            darkModeButton.style.right = '20px'; // Move in
            darkModeButton.style.transform = 'rotate(-360deg)'; // Rotate while moving out
        } else {
            darkModeButton.style.right = '-50px'; // Move out
            darkModeButton.style.transform = 'rotate(0deg)'; // Stop rotation
        }
    });

    // Restore dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
