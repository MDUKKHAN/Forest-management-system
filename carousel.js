const carouselImages = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

function slideImages() {
    currentIndex = (currentIndex + 1) % totalItems; // Cycle through images
    const offset = -currentIndex * 100; // Calculate the offset
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Slide every 2 seconds
setInterval(slideImages, 2000);
