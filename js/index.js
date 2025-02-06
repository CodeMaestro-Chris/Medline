// For nav bar
function show_nav(){
    document.getElementById("hidden_nav").classList.toggle("show");
    document.querySelector(".bars1").classList.toggle("navturn") //Turns the bars
}

// FOR PRELOADER 
// Preloader functionality
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
  
    // Hide preloader after 3 seconds and show main content
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.display = "block";
    }, 2500);
  });
  


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



// Slideshow Effect 
let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = slidesContainer.children.length; // Total number of slides, including duplicate

function showSlides() {
    slideIndex++;
    slidesContainer.style.transition = "transform 1s ease-in-out";
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Reset position when reaching the duplicate slide
    if (slideIndex === totalSlides - 1) {
        setTimeout(() => {
            slidesContainer.style.transition = "none"; // Disable animation
            slidesContainer.style.transform = "translateX(0)"; // Reset to the first slide
            slideIndex = 0; // Reset index
        }, 1000); // Match the transition duration
    }

    // Automatically move to the next slide after 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow
showSlides();


// Testimonial Slideshow 
const slider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

// Clone the first testimonial to the end for seamless transition
const firstClone = testimonials[0].cloneNode(true);
slider.appendChild(firstClone);

function showNextTestimonial() {
  currentIndex++;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Reset transition and index when reaching the cloned slide
  if (currentIndex === testimonials.length) {
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      currentIndex = 0;
    }, 500); // Match the transition duration
  }
}

// Automatically switch testimonials every 5 seconds
setInterval(showNextTestimonial, 5000);


// CONTACT US FORM VALIDATION 
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const nameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    // Get error messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
  
    let isValid = true;
  
    // Validate Name
    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }
  
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
  
    // Validate Message
    if (messageInput.value.trim() === "") {
      messageError.style.display = "block";
      isValid = false;
    } else {
      messageError.style.display = "none";
    }
  
    // If all inputs are valid, submit the form
    if (isValid) {
      alert("Your message has been sent successfully!");
      this.reset(); // Clear form fields
    }
  });
  
  // Add event listeners to remove error messages on valid input
  document.getElementById("fullname").addEventListener("input", function () {
    const nameError = document.getElementById("nameError");
    if (this.value.trim() !== "") {
      nameError.style.display = "none";
    }
  });
  
  document.getElementById("email").addEventListener("input", function () {
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.value.trim())) {
      emailError.style.display = "none";
    }
  });
  
  document.getElementById("message").addEventListener("input", function () {
    const messageError = document.getElementById("messageError");
    if (this.value.trim() !== "") {
      messageError.style.display = "none";
    }
  });
  





