$('.blog').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 300,
    appendDots: $('.blog-dots-wrapper'),
    dotsClass: 'custom-dots--white',
    appendArrows: $('.blog-arrows-wrapper'),
    prevArrow: $('.blog-arrows__prev'),
    nextArrow: $(' .blog-arrows__next'),
});