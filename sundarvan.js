
let currentIndex = 0;

function moveSlide(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    const carouselWidth = document.querySelector('.carousel').offsetWidth;

    currentIndex += direction;

    // Loop back to the start or end
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Slide images
    carouselImages.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
}
