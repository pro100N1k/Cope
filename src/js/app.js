import { detectBrowser } from './_helpers';

import 'slick-carousel';

import './_home';
import './_newsSlider';
import './_blogSlider';
import './_aboutSlider';
import './_aboutTab';
class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        // INIT YOUR PLUGINS

    };

    static initializeModules() {
        // INIT YOUR MODULES

        $(window).on('load resize', function() {
            if (window.innerWidth < 1025) {

                $('.menu-wrapper').addClass('fixed-menu-scroll');
                $('.footer-column__title').on('click',function() {
                    const _this = $(this);
                    const wrapper = _this.closest('.footer-column');
                    const title = wrapper.find('.footer-column__title');
                    const list = wrapper.find('.wrapper-ul');

                    if(!wrapper.hasClass('open')) {
                        wrapper.addClass('open');
                        title.addClass('active');
                        list.slideDown(500);
                    } else {
                        wrapper.removeClass('open');
                        title.removeClass('active');
                        list.slideUp(500);
                    }

                });

            } else {
                $('.menu-wrapper').removeClass('fixed-menu-scroll');
            }

        });

        $(window).on('scroll', function() {

            if (window.innerWidth > 1024) {
                const header = $('header');
                const nav = $('.menu-wrapper');
                let headerHeight = header.height();
                let wrapperHeight = $('.home-wrapper').height();

                let scroll = $(window).scrollTop();

                if( scroll <= 200) {
                    header.removeClass('header-scroll');
                } else {
                    header.addClass('header-scroll');
                }

                if(scroll <= wrapperHeight) {
                    nav.removeClass('fixed-menu-scroll');
                    nav.css('top','auto');
                } else {
                    nav.addClass('fixed-menu-scroll');
                    nav.css('top',headerHeight);
                }
            }


        }) ;


        $('.menu-bar').on('click', function() {
            $(this).toggleClass('open');

            if(!$('.menu-wrapper').hasClass('open')) {
                $('.menu-wrapper').addClass('open');
                $('.menu-wrapper nav>ul').slideDown(500);
            } else {
                $('.menu-wrapper').removeClass('open');
                $('.menu-wrapper nav>ul').slideUp(500);
            }
        });


    };

    static detectBrowser() {
        document.body.setAttribute('data-browser', detectBrowser());
    }

    static init() {
        this.detectBrowser();
        this.initializePlugins();
        this.initializeModules();
    }
};

const App = new Application();