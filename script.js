document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselImages = document.querySelector('.carousel-images');
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function() {
        index = (index + 1) % carouselImages.children.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        index = (index - 1 + carouselImages.children.length) % carouselImages.children.length;
        updateCarousel();
    });
});
