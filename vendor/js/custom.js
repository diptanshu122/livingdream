// -------- Jquery start ------- //
$(function () {
    // une-carte slider
    $('#feelhome-image').owlCarousel({
        margin: 0,
        rewind: true,
        autoHeight: true,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        animateOut: 'rotateOutUpLeft',
        animateIn: 'rotateInDownLeft',
        smartSpeed: 700,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#feelhome-content').owlCarousel({
        margin: 0,
        loop: true,
        autoHeight: true,
        nav: false,
        autoplay: false,
        autoplayHoverPause: true,
        smartSpeed: 700,
        rewind: true,
        lazyLoad: true,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#slider-properties').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        rewind: true,
        lazyLoad: true,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // feedback-slider
    $('#feedback-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        rewind: true,
        lazyLoad: true,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //wow slider animation
    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: false,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    // window scroll
    var senseSpeed = 5;
    var previousScroll = 0;
    $(window).scroll(function () {
        var scroller = $(this).scrollTop();
        var aboutus = $(window).height();
        if (scroller >= aboutus) {
            $('.header').addClass('up');
            if (scroller - senseSpeed > previousScroll) {
                $('.header').removeClass('fix');
            } else if (scroller + senseSpeed < previousScroll) {
                $('.header').addClass('fix');
            }
            previousScroll = scroller;
        }
        else {
            $('.header').removeClass('fix up');
        }
    });

    //=========== header.logged-in height ===========//
    var headerlogHeight = $('.header.logged-in').height();
    $('body').css('padding-top', headerlogHeight);
    $(window).load(function () {
        var headerlogHeight = $('.header.logged-in').height();
        $('body').css('padding-top', headerlogHeight);
    });
    //========= close header.logged-in height =========//

    // nowDate
    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
    $('#daterange').daterangepicker({
            "autoApply": false,
            "autoclose": false,
            "showDropdowns": false,
            "minDate": today,
            "maxDate": "1/1/20",
            "opens": 'right',
            "locale": {
                "format": "DD/MM/YY",
                "separator": "   -   ",
                "applyLabel": "Apply",
                "cancelLabel": "Cancel",
                "fromLabel": "From",
                "toLabel": "To",
                "customRangeLabel": "Custom",
                "firstDay": 1
            }
        }
        , function (start, end, label) {
            console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
        });

    // quantitiy increase or dicrease
    var quantitiy = 0;
    $('.qtyplus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('.number-guest').text());
        // If is not undefined
        $('.number-guest').text(quantity + 1);
        $('.decrease-guest').removeClass('hideicon');
        // Increment
    });
    $('.qtyminus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('.number-guest').text());
        // If is not undefined
        // Increment

        if (quantity <= 2) {
            $(this).addClass('hideicon');
        }
        else {
            $(this).removeClass('hideicon');
        }
        if (quantity > 0) {
            $('.number-guest').text(quantity - 1);
        }
    });

    // check screenWidth
    var screenWidth = $(window).width();
    if (screenWidth <= 767) {
        $('.header .call-to').insertAfter($('#sidenavMenu .link-list'));
        $('.header ul.nav-link').each(function () {
            $(this).appendTo($('#sidenavMenu .link-list'));
        });
    }

    $('.header .menu-icon').click(function (event) {
        var check = $('#sidenavMenu').hasClass('active-nav');
        if (check) {
            $(this).removeClass('active');
            $('#sidenavMenu').removeClass('active-nav');
        }
        else {
            $(this).addClass('active');
            $('#sidenavMenu').addClass('active-nav');
        }
        // preventDefault
        event.preventDefault();
    });

    $('html,body').click(function (event) {
        var check = $('#sidenavMenu').hasClass('active-nav');
        if (check) {
            $('.header .menu-icon').removeClass('active');
            $('#sidenavMenu').removeClass('active-nav');
        }
    });

    $('.header .menu-icon,#sidenavMenu').click(function (e) {
        e.isPropagationStopped();
        e.stopPropagation();
        e.isPropagationStopped();
    });

    // where-you-want
    var whereInput = $('.where-you-want #country-select');
    whereInput.data('holder', whereInput.attr('placeholder'));
    whereInput.focusin(function () {
        $(this).attr('placeholder', '');
        $('.autocomplete-menu').addClass('active-auto').fadeIn('fast');
        setTimeout(function () {
            $('.autocomplete-menu li').each(function (i) {
                $(this).delay(30 * i).fadeIn('swing');
            });
        }, 200);
    });
    whereInput.focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
        if ($('.autocomplete-menu').is(':visible')) {
            $('.autocomplete-menu').addClass('active-auto').fadeIn('fast');
            $('.autocomplete-menu li').fadeIn('swing');
        }
        else {
            $('.autocomplete-menu').removeClass('active-auto').fadeOut('fast');
            $('.autocomplete-menu li').fadeOut('swing');
        }
    });

    $('.autocomplete-menu li a').click(function (event) {
        // preventDefault
        event.preventDefault();
    });

    $('.autocomplete-menu li').click(function () {
        var liText = $(this).text();
        whereInput.val(liText);
        $('.autocomplete-menu').removeClass('active-auto').fadeOut('fast');
        $('.autocomplete-menu li').each(function (i) {
            $(this).fadeOut('swing');
        });
    });

    $('html,body').click(function () {
        $('.autocomplete-menu').removeClass('active-auto').fadeOut('fast');
        $('.autocomplete-menu li').each(function (i) {
            $(this).fadeOut('swing');
        });
    });

    $('.autocomplete-menu,.autocomplete-menu li,.where-you-want .form-control').click(function (e) {
        e.isPropagationStopped();
        e.stopPropagation();
        e.isPropagationStopped();
    });

    // controller buttons
    $('.feel-like-home .controller .prev').click(function () {
        $('#feelhome-image').trigger('prev.owl.carousel');
        $('#feelhome-content').trigger('prev.owl.carousel');
    });
    $('.feel-like-home .controller .next').click(function () {
        $('#feelhome-image').trigger('next.owl.carousel');
        $('#feelhome-content').trigger('next.owl.carousel');
    });

    // properties-boxes controller buttons
    $('.properties-boxes .controller .prev').click(function () {
        $('#slider-properties').trigger('prev.owl.carousel');
    });
    $('.properties-boxes .controller .next').click(function () {
        $('#slider-properties').trigger('next.owl.carousel');
    });


    // telephone focus palceholder
    $('#phonenumber').bind('keyup keydown', function (event) {
        // Allow: backspace, delete, tab, escape, and enter
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                return false;
            }
        }
    });
    // request form > on focus palceholder
    $('.request-form .form-control').bind('keyup keydown', function (event) {
        if ($(this).val() === '') {
            $(this).next('label').removeClass('fill');
        }
        else {
            $(this).next('label').addClass('fill');
        }
    });

    // switch-map > toggle map view
    $('#switch-map #switch[type="checkbox"]').change(function () {
        var checked_s = $(this).is(':checked');
        var windowWidth = $(window).width();
        var column = 'col-lg-4 col-sm-6';
        var prop_boxes = $('.filter-location-result .properties-boxes');
        var prop_card = $('.properties-boxes .properties-card');
        if (checked_s) {
            $('.filter-location-result').addClass('result-map');
            $('.properties-boxes .properties-card').css('height','');
            $(this).parents('.show-map').find('.map-text').text('Close');
            // update > full width (for desktop only)
            if(windowWidth >= 992){
                prop_boxes.find('.col-xs-12').removeClass(column);
            }
            // setTimeout
            setTimeout(function () {
                equalheight('.properties-boxes .properties-card');
            },600);
        }
        else {
            $('.filter-location-result').removeClass('result-map');
            $(this).parents('.show-map').find('.map-text').text('Show');

            // update > full width (for desktop only)
            if(windowWidth >= 992){
                prop_boxes.find('.col-xs-12').addClass(column);
            }
           // setTimeout
            setTimeout(function () {
                equalheight('.properties-boxes .properties-card');
            },400);
        }
    });


});
// -------- Jquery end ------- //

// -------- equalheight ------- //
equalheight = function (container) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function () {
    equalheight('.properties-boxes .properties-card');
});

$(window).resize(function () {
    equalheight('.properties-boxes .properties-card');
});


//inquiry popup
$(function () {
    $('.inquiry-popup').addClass('mCustomScrollbar');
    $('.close1').on('click', function () {
        $('.inquiry-popup').fadeOut();
    });
});