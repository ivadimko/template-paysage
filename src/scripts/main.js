
window.onload = function () {

        $('.shine').fadeOut();
        $('.gallery').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: false,
        });

};

$(document).ready(function () {

    $('.anchor').on('click', function (e) {
        e.preventDefault();

        let target = this.hash,
            $target = $(target);


        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 500, 'swing');
    });

});