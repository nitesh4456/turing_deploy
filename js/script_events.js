
        /*FIRST-LOOK*//*FIRST-LOOK*//*FIRST-LOOK*//*FIRST-LOOK*/
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');

        const parentContainer = document.getElementById("first_look");
        // Function to resize the canvas based on the parent container's size
        function resizeCanvas() {

            // Set the canvas width to match the parent container
            canvas.width = parentContainer.clientWidth;

            // Calculate the visible height of the window
            let viewportHeight = window.innerHeight;
            if (canvas.width<=1280) {//for other than desktops
                viewportHeight=viewportHeight/2;// most imp line to make responsive height
            }
            // Log the viewport height for debugging
            console.log('Viewport Height:', viewportHeight);

            // Set the parent container height to the visible viewport height
            parentContainer.style.height = `${viewportHeight}px`;
            canvas.height = parentContainer.clientHeight;

            // Log the new canvas dimensions
            console.log('Canvas size:', canvas.width, canvas.height);
        }

                
        // Set the canvas size initially
        console.log('Viewport Height:', window.innerHeight);

        resizeCanvas();


        let offset = 0;
        let direction = 1;
        let particlesArray = [];
        let numberOfParticles;
        //diffrenet number of particles for different screen sizes
        if (canvas.width >= 1280) {
            numberOfParticles=300;
        }
        else if(canvas.width>=768 && canvas.width<1280){
            numberOfParticles=200;
        }
        else if(canvas.width>=480 && canvas.width<780){
            numberOfParticles=150;
        }
        else if(canvas.width<480){//all phones
            numberOfParticles=100;
        }

        // Particle class
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                    this.directionY = -this.directionY;
                }

                this.x += this.directionX;
                this.y += this.directionY;

                this.draw();
            }
        }

        // Connect particles with lines
        function connectParticles() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a + 1; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 191, 255, ${1 - distance / 150})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }

        // Initialize particles
        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                const size = 2;
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                const directionX = Math.random() * 2 - 1;
                const directionY = Math.random() * 2 - 1;
                const color = '#00bfff';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        //text
        function wrapText(text, maxWidth) {
            const words = text.split(" ");
            let lines = [];
            let currentLine = "";
        
            words.forEach((word) => {
                const testLine = currentLine ? currentLine + " " + word : word;
                const testWidth = ctx.measureText(testLine).width;
        
                if (testWidth > maxWidth) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            });
            if (currentLine) lines.push(currentLine); // Add the last line
                return lines;
            }

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw text on the canvas
            if(canvas.width>=1280){
                ctx.font = "bold 60px 'Comic Sans MS', cursive, sans-serif"; // Set font size and family
                ctx.fillStyle = "white"; // Set text color
                //ctx.fillText("Step Into the Future with TURING ", 300, 250); // Position and content of the text
                ctx.fillText("Step Into the Future with TURING ",canvas.width/2, (canvas.height / 2) - (canvas.height * 0.1)); // Position and content of the text
                ctx.textAlign='center';
                ctx.Baseline='middle'
            }
            else{
                ctx.font = "bold 60px 'Comic Sans MS', cursive, sans-serif"; // Set font style
                ctx.fillStyle = "white"; // Set text color
                ctx.textAlign = "center"; // Center align text horizontally
                ctx.textBaseline = "middle"; // Center align text vertically
            
                const text = "Step Into the Future with TURING"; // Text to display
                const maxWidth = canvas.width * 0.8; // Allow text to wrap within 80% of canvas width
                const lineHeight = 50; // Height of each line (adjust as needed)
            
                // Split the text into wrapped lines
                const lines = wrapText(text, maxWidth);
            
                // Calculate starting Y position to vertically center the text block
                const totalHeight = lines.length * lineHeight;
                if(canvas.height>=768){
                    let startY = canvas.height / 2 - totalHeight-canvas.height*0.1;
                    // Draw each line of text
                    lines.forEach((line, index) => {
                        ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
                    });
                    }
                else{
                    let startY = canvas.height / 2 - totalHeight;
                    // Draw each line of text
                    lines.forEach((line, index) => {
                        ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
                    });
                }
            }
            
            
                

            // Draw the bouncing arrow
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 30, canvas.height / 2 -10 + offset);
            ctx.lineTo(canvas.width / 2, canvas.height / 2 + 30 + offset);
            ctx.lineTo(canvas.width / 2 + 30, canvas.height / 2 - 10 + offset);
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();

            // Update offset for bounce effect
            if (offset >= 10) direction = -1;
            else if (offset <= 0) direction = 1;

            offset += direction * 0.5;

            // Particle animation
            particlesArray.forEach(particle => particle.update());
            connectParticles();
        }


        window.addEventListener('resize', resizeCanvas);


        // Start
        init();
        animate();

    /*FIRST-LOOK*//*FIRST-LOOK*//*FIRST-LOOK*//*FIRST-LOOK*//*ENDS*/

    /*HEADING-HEADING-*HEADING-HEADING-*HEADING-HEADING*//*STARTS*/
    // Target the .heading_text element to observe
    const heading = document.querySelector('.heading_text');
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');  // Add the class to trigger animation
        } else {
        entry.target.classList.remove('slide-in'); // Remove class when it's out of view
        }
    });
    }, {
    threshold: 0.5  // Trigger the animation when 50% of the element is in the viewport
    });
    // Observe the heading element
    observer.observe(heading);
    /*HEADING-HEADING-*HEADING-HEADING-*HEADING-HEADING*//*ENDS*/

    /*event divs*//*STARTS */
    document.querySelectorAll('.down').forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent div (box) of the clicked button
            const parentDiv = button.closest('.upcoming_event_box'); // Get the closest .box ancestor
            const text = parentDiv.querySelector('.textToShow'); // Find the hidden paragraph inside the parent div
            // Toggle the image rotation by 180 degrees
            const image = parentDiv.querySelector('.down_arrow');
    
            // Check if the paragraph is currently hidden or visible
            if (text.style.display === "none" || text.style.display === "") {
                text.style.display = "block"; // Show the paragraph
                text.style.fontSize="1.9vh";
                parentDiv.style.height = "120vh"; // Increase the height of the div
                //parentDiv.style.overflow = "hidden"; // Prevent overflow if any content exceeds the box
                image.style.transform = 'rotate(180deg)'; // Rotate 180 degrees
            } else {
                text.style.display = "none"; // Hide the paragraph
                parentDiv.style.height = "80vh"; // Decrease the height of the div
                image.style.transform = 'rotate(0deg)'; // Reset to original position
            }
        });
    });
    document.querySelectorAll('.down_arrow').forEach(img => {
        img.addEventListener('click', function() {
            // Find the parent div (box) of the clicked button
            const parentDiv = img.closest('.upcoming_event_box'); // Get the closest .box ancestor
            const text = parentDiv.querySelector('.textToShow'); // Find the hidden paragraph inside the parent div
    
            // Check if the paragraph is currently hidden or visible
            if (text.style.display === "none" || text.style.display === "") {
                text.style.display = "block"; // Show the paragraph
                text.style.fontSize="2vh";
                parentDiv.style.height = "120vh"; // Increase the height of the div
                //parentDiv.style.overflow = "hidden"; // Prevent overflow if any content exceeds the box
                img.style.transform = 'rotate(180deg)'; // Rotate 180 degrees
            } else {
                text.style.display = "none"; // Hide the paragraph
                parentDiv.style.height = "80vh"; // Decrease the height of the div
                img.style.transform = 'rotate(0deg)'; // Reset to original position
            }
        });
    });
    
    
    

    /*event divs*//*ENDS */


//old js from yash
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
