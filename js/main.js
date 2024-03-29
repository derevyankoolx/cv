'use strict'

const share = document.querySelector('.share');

setTimeout(() => {
    share.classList.add("hover");
}, 1000);

setTimeout(() => {
    share.classList.remove("hover");
}, 3000);

$('.education__slider, .testimonials__slider').slick({
    infinite: false,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-left.svg"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-right.svg"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 200,
    responsive: [
        {
            breakpoint: 749,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        },
    ]
});

$('.education__slider, .testimonials__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (nextSlide === 0) {
        $('.slick-prev').hide();
    } else {
        $('.slick-prev').show();
    }

    if (nextSlide === slick.slideCount - 1) {
        $('.slick-next').hide();
    } else {
        $('.slick-next').show();
    }
});

$('.education__slider, .testimonials__slider').on('setPosition', function (event, slick) {
    if (slick.currentSlide === 0) {
        $('.slick-prev').hide();
    } else {
        $('.slick-prev').show();
    }

    if (slick.currentSlide === slick.slideCount - 1) {
        $('.slick-next').hide();
    } else {
        $('.slick-next').show();
    }
});



window.onload = function () {
    const swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });
};


jQuery('.fw-slider').slick({
    slidesToScroll: 1,
    rows: 0,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 2500,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: true
});

(function () {
    $('.skills-prog li').find('.skills-bar').each(function (i) {
        $(this).find('.bar').delay(i * 150).animate({
            width: $(this).parents().attr('data-percent') + '%'
        }, 1000, 'linear', function () {
            return $(this).css({
                'transition-duration': '.5s'
            });
        });
    });

}).call(this);