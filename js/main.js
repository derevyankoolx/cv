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
    speed: 200
  });

  $('.education__slider, .testimonials__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
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

$('.education__slider, .testimonials__slider').on('setPosition', function(event, slick) {
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



window.onload = function() {
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  };