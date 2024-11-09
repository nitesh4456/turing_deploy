// JavaScript to handle sticky navbar and logo resize on scroll
window.onscroll = function() {
    stickyNavbar();
  };
  
  function stickyNavbar() {
    const navbar = document.querySelector('.navigation');
    const logo = document.querySelector('.logo');
  
    // Set the height at which the navbar becomes sticky
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
      logo.style.width = '100px';  // Adjust size as needed
      logo.style.height = '100px'; // Adjust size as needed
    } else {
      navbar.classList.remove('sticky');
      logo.style.width = '150px'; // Original size
      logo.style.height = '150px'; // Original size
    }
  }
  



        document.addEventListener('DOMContentLoaded', function () {
            const toggleButton = document.querySelector('.toggle-box');
            const menu = document.querySelector('.menu');

            toggleButton.addEventListener('click', function () {
                menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
            });
        });