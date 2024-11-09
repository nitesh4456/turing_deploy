window.onscroll = function() {stickyNavbar()};
    
        var navbar = document.querySelector('.navbar');
        var sticky = navbar.offsetTop;
    
        function stickyNavbar() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add("fixed");
            } else {
                navbar.classList.remove("fixed");
            }
        }


// Select the hamburger menu and nav list
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');

// Function to toggle the navigation menu
function toggleNav() {
    // Toggle a class that shows/hides the nav list
    navList.classList.toggle('show-nav');
}

// Add event listener to the hamburger menu
hamburger.addEventListener('click', toggleNav);
