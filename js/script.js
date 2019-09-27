/*=======================================================
            wow animation triger on section
=======================================================*/
$(function() {
    new WOW().init();
});


/*=======================================================
                    work section
=======================================================*/

$(function() {
    $("#work").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
});


/*=======================================================
                    team section
=======================================================*/

$(function() {
    $("#team-member").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });
});


/*=======================================================
                testimonial section
=======================================================*/

$(function() {
    $("#customer-testimonial").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/*=======================================================
                    stats section
=======================================================*/

$(function() {
    $(".counter").counterUp({
        delay: 2,
        time: 3000
    });
});


/*=======================================================
                    clients section
=======================================================*/

$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });
});


/*=======================================================
                    navbar section
=======================================================*/

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// for smooth scrolling 

$(function() {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


//close mobile menu on click
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggler").click();
    });
});