const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  // Hide the current slide
  slides[currentSlide].classList.remove('active');
  
  // Move to the next slide or start over if at the end
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Show the next slide
  slides[currentSlide].classList.add('active');
}

// Show the first slide immediately
slides[currentSlide].classList.add('active');

// Set the interval to show the slides every 3 seconds
setInterval(showSlide, 5000);
