$(document).ready(function() {
    const slider = $('.home');
    const  info = slider.find('.home-info');
    const img = slider.find('.home-img-wrapper');

    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        useCss: true,
        useTransform: true,
        speed: 300,
        appendDots: $('.custom-dots-wrapper'),
        dotsClass: 'custom-dots',
        appendArrows: $('.home-arrows-wrapper'),
        prevArrow: $('.home-arrows__prev'),
        nextArrow: $(' .home-arrows__next'),
    });

    slider.on('beforeChange', function(event,slick,currentSlide, nextSlide) {
        info.animate({'opacity' : '0', 'left' : '-100%'}, 0);
        img.animate({'opacity' : '0','right': '-100%'}, 0);
    });

    slider.on('afterChange', function(event,slick,currentSlide) {
        info.animate({'opacity' : '1', 'left': '0'}, 500);
        img.animate({'opacity' : '1', 'right' : ''}, 500);
    });
});


