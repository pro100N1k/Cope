$('.about-slider-item').on('click', function() {

    const _button = $(this);
    const tabID = _button.attr('data-about');
    const wrapper = $('.about');
    const text = wrapper.find('.about-info-text');
    const img = wrapper.find('.about-img');

    $('.about-info-text').removeClass('active');
    $('.about-info-text[data-about="' + tabID + '"]').addClass('active');

    $('.about-img').removeClass('active');
    $('.about-img[data-about="' + tabID + '"]').addClass('active');

});