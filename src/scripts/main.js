
window.onload = function () {

        $('.shine').fadeOut();

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