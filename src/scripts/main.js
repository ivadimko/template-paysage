
window.onload = function () {

        $('.shine').fadeOut();
        $('.gallery').slick({
            infinite:false,
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: false,
            variableWidth: true
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