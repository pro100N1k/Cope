$('.about-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 300,
    appendDots: $('.about-slider-dots-wrapper'),
    dotsClass: 'custom-dots--white',
    appendArrows: $('.about-slider-arrows-wrapper'),
    prevArrow: $('.about-slider-arrows__prev'),
    nextArrow: $(' .about-slider-arrows__next'),
});


$('.about-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.about-info-text').removeClass('active');
    $('.about-info-text[data-about="' + currentSlide + '"]').addClass('active');
    $('.about-img').removeClass('active');
    $('.about-img[data-about="' + currentSlide + '"]').addClass('active');
});