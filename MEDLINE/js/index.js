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
    const goTotop = document.querySelector('.to-the-top');

    goTotop.style.position = 'fixed';
    goTotop.style.bottom = '30px';
    goTotop.style.right = '20px'; // Initially hidden
    goTotop.style.transition = 'transform 1s ease, top 1s ease';

    // Make the darkmode button visible and positioned
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.bottom = '20px';
    darkModeButton.style.right = '-100px'; // Initially hidden
    darkModeButton.style.transition = 'transform 1.1s ease, right 1.1s ease';

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
            goTotop.style.transform = 'translateY(-50px)'; // Move up to top
            goTotop.style.opacity = '1'
        } else {
            darkModeButton.style.right = '-50px'; // Move out
            darkModeButton.style.transform = 'rotate(0deg)'; // Stop rotation
            goTotop.style.opacity = '0'; // Reset to original position
            goTotop.style.transform = 'translateY(0px)'; // Reset to original position
        }
    });

    // Restore dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
