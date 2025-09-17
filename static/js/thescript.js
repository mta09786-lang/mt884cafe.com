/**
 * Created by Rikesh Maharjan
 * Email : rikeshmaharjan.c4@gmail.com
*/


var $ = jQuery;
var winWidth = $(window).width();

$(document).ready(function () {
    sliderInit();
    addClassInit();
    navInit();
    mcustomInit();
    smootScroll();
    if (winWidth > 767) {
        var $gallery = $('.common-menu-container').isotope({
            // options
            itemSelector: '.menu-item',
            layoutMode: 'masonry'
        });
    }
});


/*------------------------------- Functions Starts -------------------------------*/
function sliderInit() {
    $('.reviews-container .common-box-container').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 1000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000
    });
    $('#common-menu-album').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 1000,
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    });


    //  $('.banner-section-two .banner-slider').slick({
    //     arrows: true,
    //     dots: false,
    //     autoplay: true,
    //     speed: 1000,
    //     fade: true,
    //     pauseOnHover: false,
    //     cssEase: 'linear',
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplaySpeed: 3000
    // });

    $('.events-section .common-box-container').slick({
        slidesToShow: 3,
        rows: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    });

    $('.service-section .service-container').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 1000,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.tesimonial-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        dots: false,
        autoplay: true,
        asNavFor: '.testimonial-image'
    });

    $('.testimonial-image').slick({
        arrows: false,
        dots: false,
        autoplay: false,
        speed: 1000,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
    });
}

function addClassInit() {
    $('.common-toggle').click(function () {
        $('#header-wrapper').toggleClass('nav-open');
    });

    $('#header-wrapper .logo-nav-wrapper ul li a').click(function () {
        $('#header-wrapper').removeClass('nav-open');
    });
}

function navInit() {
    var scrollTop = 0;
    jQuery(window).scroll(function () {
        scrollTop = jQuery(window).scrollTop();
        jQuery('.counter').html(scrollTop);
        if (scrollTop >= 300) {
            jQuery('#header-wrapper').addClass('nav-scroll');
        } else if (scrollTop < 300) {
            jQuery('#header-wrapper').removeClass('nav-scroll');
        }
    });
}

function smootScroll() {
    // hide #back-top first
    $("#common-back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#common-back-top').fadeIn();
            } else {
                $('#common-back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#common-back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
}

function mcustomInit() {
    $('#wednesday-offer-modal-open').click(function (e) {
        e.preventDefault();
        $('#wednesday-offer-guide-modal').modal('show');
    });
}

/*-------------------------------- Functions Ends --------------------------------*/