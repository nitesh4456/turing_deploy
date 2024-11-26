
document.addEventListener('DOMContentLoaded', () => {
    const visibleSlides = 5;
    const intervalTime = 3000;
    const slideWidth = 300; // Slide width including margin
    const slider = document.querySelector('.slider');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dotsContainer = document.querySelector('.pagination-dots');
    let autoRotateInterval;
    let currentIndex = 0;

    // Add clones for smooth infinite looping
    slides.forEach(slide => slider.append(slide.cloneNode(true))); // Append clones at end

    // Set initial transform position to show the first "page"
    slider.style.transform = `translateX(0px)`;

    // Create dots for main slides
    function createDots() {
      slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = index;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
    }

    // Update dot active state
    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex % slides.length);
      });
    }

    // Update active slide styling
    function updateActiveSlide() {
      slides.forEach((slide, index) => {
        slide.classList.toggle('active-slide', index === currentIndex % slides.length);
      });
    }

    // Go to specific slide
    function goToSlide(index) {
      clearInterval(autoRotateInterval); // Pause auto-rotation on dot click
      currentIndex = index;
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
      updateDots();
      updateActiveSlide();
      startAutoRotate(); // Resume auto-rotation after navigating to slide
    }

    // Continuous move function for infinite scrolling effect
    function continuousMove() {
      slider.style.transition = 'transform 0.5s ease-in-out';
      const firstSlide = slider.firstElementChild;
      slider.style.transform = `translateX(-${slideWidth}px)`;

      // When transition ends, move the first slide to the end for infinite loop
      slider.addEventListener('transitionend', () => {
        slider.style.transition = 'none'; // Disable transition for repositioning
        slider.appendChild(firstSlide); // Move first slide to the end
        slider.style.transform = 'translateX(0px)'; // Reset transform position
        currentIndex = (currentIndex + 1) % slides.length; // Update logical slide index
        updateDots(); // Update dots
        updateActiveSlide(); // Update active slide styling
        setTimeout(() => slider.style.transition = 'transform 0.5s ease-in-out', 50); // Re-enable transition
      }, { once: true });
    }

    // Auto-rotate function
    function autoRotateSlides() {
      continuousMove();
    }

    // Start auto-rotation
    function startAutoRotate() {
      autoRotateInterval = setInterval(autoRotateSlides, intervalTime);
    }

    // Pause auto-rotation on hover
    function pauseAutoRotate() {
      clearInterval(autoRotateInterval);
    }

    // Initialize dots and set up autoplay
    createDots();
    updateDots(); // Initial dot update
    updateActiveSlide(); // Initial active slide styling
    startAutoRotate();

    // Event listeners for hover actions
    slider.addEventListener('mouseover', pauseAutoRotate);
    slider.addEventListener('mouseleave', startAutoRotate);
  });




  document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll("#faq .question");

    questions.forEach(question => {
      question.addEventListener("click", function() {
        const answer = this.nextElementSibling;

        // Toggle visibility of the answer
        if (answer.classList.contains("show")) {
          answer.classList.remove("show");
          answer.classList.add("collapse"); // Hide answer
          question.classList.add("collapsed"); // Maintain collapsed state
        } else {
          answer.classList.remove("collapse"); // Show answer
          answer.classList.add("show");
          question.classList.remove("collapsed"); // Remove collapsed state
        }

        // Toggle icons based on collapsed/expanded state
        const iconShow = question.querySelector(".icon-show");
        const iconClose = question.querySelector(".icon-close");

        if (answer.classList.contains("show")) {
          iconShow.style.display = "none"; // Hide show icon
          iconClose.style.display = "inline"; // Show close icon
        } else {
          iconShow.style.display = "inline"; // Show show icon
          iconClose.style.display = "none"; // Hide close icon
        }
      });
    });
  });