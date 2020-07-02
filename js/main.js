$(document).ready(function(){
    "use strict";

    // Mean Menu 
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767",
        meanDisplay:"block"
    });

    // Slick Slider 
    $(".slider-active").slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:false,
        arrows:true,
        prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next'><i class='fa fa-chevron-right'></i></button>",
        responsive:[
            {breakpoint:767, setting: {dots: false, arrows:false}}
        ]
    });

    // Testimonail Slider 
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // Clients Logo | Slick
    $('.clients').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // Wow animation 
    new WOW().init();

    // Magnigic PopUp
    $(".popup-video").magnificPopup({
        type: 'iframe'
    });

    // Counter Up 
    $('.counter').counterUp({
        dalay:10,
        time:1000
    })

})