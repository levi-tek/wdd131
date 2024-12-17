document.addEventListener("DOMContentLoaded", () => {
    const hambutton = document.querySelector("#hamburger");
    const navigation = document.querySelector("#nav");

    hambutton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hambutton.classList.toggle("open");
    });
});



/// Select all slides
const slides = document.querySelectorAll('.va');
let currentIndex = 0; // Keep track of the current slide

// Function to update the active slide
function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active'); // Remove the active class from all slides
    if (index === currentIndex) {
      slide.classList.add('active'); // Add active class to the current slide
    }
  });
}

// Function to start auto-rotation
function startAutoRotation() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length; // Increment the index and loop back to the start
    updateCarousel();
  }, 3000); // Change slides every 3 seconds
}

// Initialize carousel
updateCarousel();
startAutoRotation();




// Save form data to local storage when the form is submitted
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("inquiries").value;
  const date = document.getElementById("date").value;

  // Store form data in localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
  localStorage.setItem("date", date);

  // Optional: Give feedback to the user
  alert("Your inquiry has been saved!");
});

// Load saved form data from localStorage on page load
window.addEventListener("load", function() {
  if (localStorage.getItem("name")) {
      document.getElementById("name").value = localStorage.getItem("name");
  }
  if (localStorage.getItem("email")) {
      document.getElementById("email").value = localStorage.getItem("email");
  }
  if (localStorage.getItem("message")) {
      document.getElementById("inquiries").value = localStorage.getItem("message");
  }
  if (localStorage.getItem("date")) {
      document.getElementById("date").value = localStorage.getItem("date");
  }
});




// .....get date.....
const currentYear = document.querySelector("#currentYear");
const today = new Date();
const year = today.getFullYear();

currentYear.innerHTML = year;



// ......testimonial........
let index = 0; // Keeps track of the current slide
const shows = document.querySelectorAll('.show'); // Get all slides
const total = shows.length; // Get the total number of slides
const Containers = document.querySelector('.container'); // The container that holds all slides

// Function to update the carousel
function updateCarousels() {
    const offset = -index * 100; // Calculate the offset (in percentage)
    Containers.style.transform = `translateX(${offset}%)`; // Move the container to show the current slide
}

// Next button functionality
document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % total; // Go to the next slide, and loop back to the first slide
    updateCarousels();
});

// Prev button functionality
document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + total) % total; // Go to the previous slide, and loop back to the last slide
    updateCarousels();
});