/*global $,owl,smoothScroll,WOW,alert*/
$(document).ready(function () {
    "use strict";


    //for smoth scroll
    smoothScroll.init({
        speed: 800,
        updateURL: false,
        offset: 85
    });

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true,
        offset: 0,
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    /* ---------------------------------------------
     Sliders
    --------------------------------------------- */
    $(".hero-slider").owlCarousel({
        //        transitionStyle: "fadeUp",
        navigation: false,
        slideSpeed: 1000,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        stopOnHover: false,
        mouseDrag: false,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        afterAction: function (el) {
            //remove class active
            this
                .$owlItems
                .removeClass('active');

            //add class active
            this
                .$owlItems //owl internal $ object containing items
                .eq(this.currentItem)
                .addClass('active');
        }
    });

    $(".nw-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 4000,
        items: 2,
        mouseDrag: true,
        pagination: true,
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 2],
            [800, 2],
			[1000, 2],
			[1200, 2],
			[1400, 2],
			[1600, 2]
        ],
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        stopOnHover: true
    });

    $("#clients .cl-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 4000,
        items: 4,
        mouseDrag: true,
        pagination: true,
        itemsCustom: [
			[0, 1],
			[450, 2],
			[600, 3],
			[700, 3],
            [800, 4],
			[1000, 4],
			[1200, 4],
			[1400, 4],
			[1600, 4]
        ],
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        stopOnHover: true
    });
    $(".works-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 4000,
        items: 4,
        mouseDrag: true,
        pagination: true,
        itemsCustom: [
			[0, 1],
			[450, 2],
			[600, 2],
			[700, 2],
            [800, 3],
			[1000, 3],
			[1200, 4],
			[1400, 4],
			[1600, 4]
        ],
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        stopOnHover: true
    });

    $(".cl-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 4000,
        items: 6,
        mouseDrag: true,
        pagination: false,
        itemsCustom: [
			[0, 1],
            [360, 1],
			[450, 2],
			[600, 3],
			[700, 3],
            [800, 3],
			[1000, 5],
			[1200, 6],
			[1400, 6],
			[1600, 6]
        ],
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        stopOnHover: true
    });




    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    //customize the header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 156) {
            $('.main-head').addClass('sticky');
        } else {
            $('.main-head').removeClass('sticky');
        }
    });

    $('.side-nav').mCustomScrollbar({
        autoHideScrollbar: false,
        setTop: 0,
        scrollInertia: 50,
        theme: "light-1"
    });

    $('.open-sidebar').on('click', function () {
        $('.sidebar').toggleClass('opened');
        $('.overlay_gen').fadeIn();
        $('body').addClass('sided');
    });

    $('.overlay_gen').on('click', function () {
        $('.sidebar').toggleClass('opened');
        $('.overlay_gen').fadeOut();
        $('body').removeClass('sided');
    });

    if ($('.select2').length) {
        $('.select2').select2();
    }

    if ($('.select-nosearch').length) {
        $('.select-nosearch').select2({
            minimumResultsForSearch: Infinity
        });
    }

    $('.open-search, .search-form').on("click", function (e) {
        e.stopPropagation();
    });

    $('.open-search').click(function () {
        $('.search-form').slideDown();
    });

    $('body').click(function () {
        $('.search-form').slideUp();
    });

    $('#lightgallery').lightGallery();


    var $loader = document.querySelector(".loader");

    window.onload = function () {
        $loader.classList.remove("loader--active");
    };

    document.querySelector(".btn").addEventListener("click", function () {
        //  $loader.classList.add("loader--active");
        //
        //  window.setTimeout(function() {
        //    $loader.classList.remove("loader--active");
        //  }, 5000);
    });


    $('.sh-home').click(function () {
        window.setTimeout(function () {
            $('#home').fadeIn();
            $('#about').fadeOut();
            $('#services').fadeOut();
            $('#news').fadeOut();
            $('#clients').fadeOut();
            $('#contact').fadeOut();
            $('#works').fadeOut();
            $('.footer-bottom').removeClass('active');
            $('.main-head').removeClass('active');
            $(this).parent().addClass('active').siblings().removeClass('active');
            $('.logo img').attr('src', 'images/logo.png');
            $('.wrapper').css({
                overflow: 'hidden'
            });
            $('.sidebar').removeClass('opened');
            $('.overlay_gen').fadeOut();
            $('body').removeClass('sided');
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        }, 1800);
        $loader.classList.add("loader--active");

        window.setTimeout(function () {
            $loader.classList.remove("loader--active");
        }, 2000);
        $(this).parent().addClass('active').siblings().removeClass('active');


    });

    $('.sh-about').click(function () {
        window.setTimeout(function () {
            $('#about').fadeIn();
            $('#home').fadeOut();
            $('#services').fadeOut();
            $('#news').fadeOut();
            $('#clients').fadeOut();
            $('#contact').fadeOut();
            $('#works').fadeOut();
            $('.footer-bottom').addClass('active');
            $('.main-head').addClass('active');
            $('.logo img').attr('src', 'images/logo-inner.png');
            $('.wrapper, body').css({
                overflow: 'unset'
            });
            $('.sidebar').removeClass('opened');
            $('.overlay_gen').fadeOut();
            $('body').removeClass('sided');
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        }, 1800);
        $loader.classList.add("loader--active");

        window.setTimeout(function () {
            $loader.classList.remove("loader--active");
        }, 2000);
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('.sh-services').click(function () {
        window.setTimeout(function () {
            $('#services').fadeIn();
            $('#about').fadeOut();
            $('#home').fadeOut();
            $('#news').fadeOut();
            $('#clients').fadeOut();
            $('#contact').fadeOut();
            $('#works').fadeOut();
            $('.footer-bottom').addClass('active');
            $('.main-head').addClass('active');
            $('.logo img').attr('src', 'images/logo-inner.png');
            $('.wrapper, body').css({
                overflow: 'unset'
            });
            $('.sidebar').removeClass('opened');
            $('.overlay_gen').fadeOut();
            $('body').removeClass('sided');
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        }, 1800);
        $loader.classList.add("loader--active");

        window.setTimeout(function () {
            $loader.classList.remove("loader--active");
        }, 2000);
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('.sh-news').click(function () {
        window.setTimeout(function () {
            $('#news').fadeIn();
            $('#about').fadeOut();
            $('#services').fadeOut();
            $('#home').fadeOut();
            $('#clients').fadeOut();
            $('#contact').fadeOut();
            $('#works').fadeOut();
            $('.footer-bottom').addClass('active');
            $('.main-head').addClass('active');
            $('.logo img').attr('src', 'images/logo-inner.png');
            $('.wrapper, body').css({
                overflow: 'unset'
            });
            $('.sidebar').removeClass('opened');
            $('.overlay_gen').fadeOut();
            $('body').removeClass('sided');
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        }, 1800);
        $loader.classList.add("loader--active");

        window.setTimeout(function () {
            $loader.classList.remove("loader--active");
        }, 2000);
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('.sh-clients').click(function () {
        window.setTimeout(function () {
            $('#clients').fadeIn();
            $('#about').fadeOut();
            $('#services').fadeOut();
            $('#news').fadeOut();
            $('#home').fadeOut();
            $('#contact').fadeOut();
            $('#works').fadeOut();
            $('.footer-bottom').addClass('active');
            $('.main-head').addClass('active');
            $('.logo img').attr('src', 'images/logo-inner.png');
            $('.wrapper, body').css({
                overflow: 'unset'
            });
            $('.sidebar').removeClass('opened');
            $('.overlay_gen').fadeOut();
            $('body').removeClass('sided');
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        }, 1800);
        $loader.classList.add("loader--active");

        window.setTimeout(function () {
            $loader.classList.remove("loader--active");
        }, 2000);
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $('.sh-contact').click(function () {
        window.setTimeout(function () {
            $('#contact').fadeIn();
            $('#about').fadeOut();
            $('#services').fadeOut();
            $('#news').fadeOut();
            $('#home').fadeOut();
            $('#clients').fadeOut();
            $('#works').fadeOut();
            $('.footer-bottom').addClass('active');
            $('.main-head').addClass('active');
            $('.logo img').attr('src', 'images/logo-inner.png');
            $('.wrapper, body').css({
                overflow: 'unset'
            });
            $('.sidebar').removeClass('opened');
            $('.overlay_gen').fadeOut();
            $('body').removeClass('sided');
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        }, 1800);
        $loader.classList.add("loader--active");

        window.setTimeout(function () {
            $loader.classList.remove("loader--active");
        }, 2000);
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.sh-works').click(function () {
        window.setTimeout(function () {
            $('#works').fadeIn();
            $('#about').fadeOut();
            $('#services').fadeOut();
            $('#news').fadeOut();
            $('#home').fadeOut();
            $('#clients').fadeOut();
            $('#contact').fadeOut();
            $('.footer-bottom').addClass('active');
            $('.main-head').addClass('active');
            $('.logo img').attr('src', 'images/logo-inner.png');
            $('.wrapper, body').css({
                overflow: 'unset'
            });
            $('.sidebar').removeClass('opened');
            $('.overlay_gen').fadeOut();
            $('body').removeClass('sided');
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        }, 1800);
        $loader.classList.add("loader--active");

        window.setTimeout(function () {
            $loader.classList.remove("loader--active");
        }, 2000);
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    var locationHash = window.location.hash.substring(1);
    if (locationHash == 'home') {
        window.setTimeout(function () {
            $('.sh-home').trigger('click');
        }, 400);
    } else if (locationHash == 'about') {
        window.setTimeout(function () {
            $('.sh-about').trigger('click');
        }, 400);
    } else if (locationHash == 'services') {
        window.setTimeout(function () {
            $('.sh-services').trigger('click');
        }, 400);
    } else if (locationHash == 'news') {
        window.setTimeout(function () {
            $('.sh-news').trigger('click');
        }, 400);
    } else if (locationHash == 'clients') {
        window.setTimeout(function () {
            $('.sh-clients').trigger('click');
        }, 400);
    } else if (locationHash == 'contact') {
        window.setTimeout(function () {
            $('.sh-contact').trigger('click');
        }, 400);
    } else if (locationHash == 'works') {
        window.setTimeout(function () {
            $('.sh-works').trigger('click');
        }, 400);
    }

    function openSearch() {
        $('.js-search-overlay').addClass('is-open');
        $('.js-search-overlay').find('input[type=search]').focus();
    }

    $('.open-srch').click(function (e) {
        e.preventDefault();
        openSearch();
    });

    function closeSearch() {
        $('.js-search-overlay').removeClass('is-open');
        $('.js-search-overlay').find('input[type=search]').blur();
    }

    $('.js-search-close').click(function (e) {
        e.preventDefault();
        closeSearch();
    });

    // Accessibility
    $(document).keyup(function (e) {
        if (e.keyCode === 27) { // esc key

            // close the search overlay
            if ($('.js-search-overlay').hasClass('is-open')) {
                closeSearch();
            }

        }
    });


});