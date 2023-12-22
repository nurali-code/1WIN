$(document).ready(function () {
    $('.btn__menu').on('click', () => { $('nav, .btn__menu').toggleClass('active'); })
    $('.dropdown-btn').on('click', function (e) { $(this).toggleClass('active').next('.dropdown-content').slideToggle(300); })
});

