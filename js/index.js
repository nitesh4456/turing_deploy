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



