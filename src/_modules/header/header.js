'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuItems = $('.header__item');
    var locations = $('.home__location__address');
    var maps = $('iframe');
    var options = $('.gatos__productos__option');
    var gatosPageSlides = $('.gatos__productos__slide');
    var consejosPageSlides = $('.consejos__hero__slide');
    var consejosArrowLeft = $('.arrow-left');
    var consejosArrowRight = $('.arrow-right');
    var gatosArrowLeft = $('.arrow-left');
    var gatosArrowRight = $('.arrow-right');
    var sliderDots = $('.consejos__hero__slider-dots span');

    function setActiveContent(target, content, index) {
        $(target).removeClass('-active');
        $(content).removeClass('-active');

        $(target[index]).addClass('-active');
        $(content[index]).addClass('-active');
    };
    
    locations.on('click', function() {
        var index = locations.index(this);
        setActiveContent(locations, maps, index);
    })

    options.on('click', function() {
        var index = options.index(this);
        setActiveContent(options, gatosPageSlides, index);
    })

    sliderDots.on('click', function() {
        var index = sliderDots.index(this);
        setActiveContent(sliderDots, consejosPageSlides, index);
    })

    gatosArrowLeft.on('click', function() {
        var activeOption = options.filter(function() {
            return $(this).hasClass('-active');
        });
        var index = options.index(activeOption);

        if(index > 0) {
            index--
            setActiveContent(options, slides, index);
        }
    })

    gatosArrowRight.on('click', function() {
        var activeOption = options.filter(function() {
            return $(this).hasClass('-active');
        });
        var index = options.index(activeOption);

        if(index < (options.length - 1)) {
            index++
            setActiveContent(options, slides, index);
        }
    });

    consejosArrowLeft.on('click', function() {
        var activeOption = sliderDots.filter(function() {
            return $(this).hasClass('-active');
        });
        var index = sliderDots.index(activeOption);

        if(index > 0) {
            index--
            setActiveContent(sliderDots, consejosPageSlides, index);
        }
    });

    consejosArrowRight.on('click', function() {
        var activeOption = sliderDots.filter(function() {
            return $(this).hasClass('-active');
        });
        var index = sliderDots.index(activeOption);

        if(index < (sliderDots.length - 1)) {
            index++
            setActiveContent(sliderDots, consejosPageSlides , index);
        }
    });

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    menuItems.on('mouseenter', function() {
        header.addClass('-js-hovered');
    });

    menuItems.on('mouseleave', function() {
        header.removeClass('-js-hovered');
    });
    
    setActiveContent(locations, maps, 0);
    setActiveContent(options, gatosPageSlides, 0);
    setActiveContent(sliderDots, consejosPageSlides, 0);
};

module.exports = Header;
