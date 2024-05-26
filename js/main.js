(function (Ksh) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if (Ksh('#spinner').length > 0) {
                Ksh('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Sticky Navbar
    Ksh(window).scroll(function () {
        if (Ksh(this).scrollTop() > 45) {
            Ksh('.navbar').addClass('sticky-top shadow-sm');
        } else {
            Ksh('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // International Tour carousel
    Ksh(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // packages carousel
    Ksh(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    Ksh(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


   // Back to top button
   Ksh(window).scroll(function () {
    if (Ksh(this).scrollTop() > 300) {
        Ksh('.back-to-top').fadeIn('slow');
    } else {
        Ksh('.back-to-top').fadeOut('slow');
    }
    });
    Ksh('.back-to-top').click(function () {
        Ksh('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);

