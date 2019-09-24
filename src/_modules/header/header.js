'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuItems = $('.header__item');
    var locations = $('.-js-location');
    var maps = $('.-js-map');
    var options = $('.-js-option');
    var slides = $('.-js-slide');
    var consejosPageSlides = $('.consejos__hero__slide');
    var consejosArrowLeft = $('.arrow-left');
    var consejosArrowRight = $('.arrow-right');
    var arrowLeft = $('.arrow-left');
    var arrowRight = $('.arrow-right');
    var sliderDots = $('.consejos__hero__slider-dots span');
    var headerLinks = $('.header__item a');

    headerLinks.on('click', function() {
        header.removeClass('-open');
        body.removeClass('-hideOverflow');

    })

    $(window).on('scroll', function() {
        

        if($(window).scrollTop() > 10) {
            header.addClass('-js-scrolled');
        } else {
            header.removeClass('-js-scrolled');
        }
    })

    function setActiveContent(target, content, index, parents) {
        $(target).removeClass('-active');
        $(content).removeClass('-active');
        
        $(target[index]).addClass('-active');
        $(content[index]).addClass('-active');
        
        if($(target[index]).parents('.-js-supermenu').length > 0) {
            $('.-js-supermenu').removeClass('-active');
            $(target[index]).parents('.-js-supermenu').addClass('-active');
        } else if(parents && !$(target[index]).parents('.-js-supermenu').length) {
            $('.-js-supermenu').removeClass('-active');
        }
    };
    
    locations.on('click', function() {
        var index = locations.index(this);
        setActiveContent(locations, maps, index, false);
    })

    $('.-js-supermenu').on('click', function() {
        $('.-js-supermenu').removeClass('-active');
        $(options).removeClass('-active');
        $(this).addClass('-active');
        $('.gatos__productos__sublist').removeClass('-active');
        $('.perros__productos__sublist').removeClass('-active');
        $(this).children('.gatos__productos__sublist').addClass('-active');
        $(this).children('.perros__productos__sublist').addClass('-active');
    }) 

    options.on('click', function(e) {
        var index = options.index(this);

        $('.-js-supermenu').removeClass('-active');
        setActiveContent(options, slides, index, true);
        $(this).parent('.-js-supermenu').addClass('-active');
        $('.gatos__productos__sublist').removeClass('-active');
        $('.perros__productos__sublist').removeClass('-active');

        e.stopPropagation();

        if($(this).parents('.-js-supermenu').length > 0) {
            $(this).clone(true).insertAfter($(this));
            $(this).remove();
        }
    })

    sliderDots.on('click', function() {
        var index = sliderDots.index(this);
        setActiveContent(sliderDots, consejosPageSlides, index, false);
    })

    arrowLeft.on('click', function() {
        var activeOption = options.filter(function() {
            return $(this).hasClass('-active');
        });
        var index = options.index(activeOption);

        if(index > 0) {
            index--
            setActiveContent(options, slides, index, true);
        }
    })

    arrowRight.on('click', function() {
        var activeOption = options.filter(function() {
            return $(this).hasClass('-active');
        });

        var index = options.index(activeOption);

        if(index < (options.length - 1)) {
            index++
            setActiveContent(options, slides, index, true);
        }

    });

    consejosArrowLeft.on('click', function() {
        var activeOption = sliderDots.filter(function() {
            return $(this).hasClass('-active');
        });
        var index = sliderDots.index(activeOption);

        if(index > 0) {
            index--
            setActiveContent(sliderDots, consejosPageSlides, index, false);
        }
    });

    consejosArrowRight.on('click', function() {
        var activeOption = sliderDots.filter(function() {
            return $(this).hasClass('-active');
        });
        var index = sliderDots.index(activeOption);

        if(index < (sliderDots.length - 1)) {
            index++
            setActiveContent(sliderDots, consejosPageSlides , index, false);
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
    
    setActiveContent(locations, maps, 0, false);
    setActiveContent(options, slides, 0, true);
    setActiveContent(sliderDots, consejosPageSlides, 0, false);

    var header = $('.header');

    function getCurentFileName(){
        var pagePathName= window.location.pathname;
        return pagePathName.search('contacto');
    }

    if(getCurentFileName() === 1) {
        header.addClass('-contacto');
    }

    //prodcuto logic
    var beneficioWrapper = $('.producto__beneficios__list-wrapper');
    var imageCircles = $('.-js-circle');
    var prodcutDescription = $('.producto__beneficios__description-wrapper');
    

    beneficioWrapper.on('click', function() {
        var index = beneficioWrapper.index(this);

        setActiveContent(beneficioWrapper, imageCircles, index, false);
        setActiveContent(beneficioWrapper, prodcutDescription, index, false);
    })

    imageCircles.on('click', function() {
        var index = imageCircles.index(this);

        setActiveContent(imageCircles, beneficioWrapper, index, false);
        setActiveContent(imageCircles, prodcutDescription, index, false);
    })

    setActiveContent(beneficioWrapper, imageCircles, 0, false);
    setActiveContent(beneficioWrapper, prodcutDescription, 0, false);

    var viewport = 0; 
    if($(window).width() < 640) {
        viewport = 110;
    } else {
        viewport = 70;
    } 

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                if(viewport > 640) {

                }

                $('html, body').animate({
                        scrollTop: target.offset().top - viewport
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                    var $target = $(target);
                    $target.focus();
                });
            }
        }
    });
    console.log($(window).width())
};

module.exports = Header;
