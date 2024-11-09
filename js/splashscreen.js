document.addEventListener('DOMContentLoaded', () => {
    // Create and append the splash screen container
    const backgroundLoader = document.createElement('div');
    backgroundLoader.classList.add('background-loader');
    backgroundLoader.id = 'splashScreen';
    backgroundLoader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        background: #000;
    `;
    document.body.appendChild(backgroundLoader);

    // Create the animation structure
    for (let j = 0; j < 4; j++) {
        const loader = document.createElement('div');
        loader.classList.add('loader');
        loader.style.setProperty('--j', j);
        for (let i = 1; i <= 20; i++) {
            const span = document.createElement('span');
            span.style.setProperty('--i', i);
            loader.appendChild(span);
        }
        backgroundLoader.appendChild(loader);
    }

    // Set a timer for the splash screen animation duration
    const animationDuration = 5000; // 5 seconds

    // Set a flag for splash screen visibility
    let splashScreenShown = false;

    setTimeout(() => {
        splashScreenShown = true;
        if (document.readyState === 'complete') {
            fadeOutSplashScreen();
        }
    }, animationDuration);

    // Ensure the splash screen fades out once the page has fully loaded
    window.onload = () => {
        if (splashScreenShown) {
            fadeOutSplashScreen();
        }
    };

    function fadeOutSplashScreen() {
        backgroundLoader.style.transition = 'opacity 0.5s';
        backgroundLoader.style.opacity = '0';
        setTimeout(() => {
            backgroundLoader.style.display = 'none';
        }, 500);
    }
});
