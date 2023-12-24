$(document).ready(function () {
    $('.btn__menu').on('click', () => { $('body, .header nav, .btn__menu').toggleClass('active'); })
    $('.dropdown-btn').on('click', function (e) { $(this).toggleClass('active').next('.dropdown-content').slideToggle(300); })

    $(document).on('click', function (e) {
        if (!(($(e.target).parents('.navbar').length) ||
            ($(e.target).parents('btn__menu').length) ||
            ($(e.target).hasClass('btn__menu')) ||
            ($(e.target).hasClass('navbar'))
        )) { $('body, .header nav, .btn__menu').removeClass('active'); }
    });

    if (window.innerWidth >= 1000) {
        $('.slider').slick({
            arrows: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{ breakpoint: 1000, settings: "unslick" }]
        });

    }


});

