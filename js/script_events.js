function initializeSlider(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found`);
        return;
    }

    const images = container.querySelectorAll('.event-image');
    const descriptions = container.querySelectorAll('.description');
    const dots = container.querySelectorAll('.dot');

    if (images.length === 0 || dots.length === 0) {
        console.error(`No images or dots found in container ${containerId}`);
        return;
    }

    let currentIndex = 0;

    function showCurrent() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
        descriptions.forEach((desc, index) => {
            desc.classList.toggle('active', index === currentIndex);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showCurrent();
    }

    // Attach click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showCurrent();
        });
    });

    // Initial display
    showCurrent();

    // Auto-slide with interval
    setInterval(nextImage, 3000); // Adjust the interval as needed
}

// Initialize sliders for both sections
initializeSlider('latest-events');
initializeSlider('past-events');
