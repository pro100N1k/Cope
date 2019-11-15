$('.news').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    appendArrows: $('.news-arrows-wrapper'),
    prevArrow: $('.news-arrows__prev'),
    nextArrow: $(' .news-arrows__next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 421,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});