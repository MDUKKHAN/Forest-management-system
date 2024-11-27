let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  const carouselImages = document.querySelector('.carousel-images');
  const slideWidth = slides[0].clientWidth;
  carouselImages.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function startSlideshow() {
  setInterval(nextSlide, 2000); // 2 seconds interval
}

// Start the slideshow when the page loads
window.onload = startSlideshow;
