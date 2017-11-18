;(function($){
    'use strict';

    +function () {
        $('#tie').on('click', function () {
            event.preventDefault();
            $('.item-tie').toggleClass('visible');
        });

        $('#suit').on('click', function () {
            event.preventDefault();
            $('.item-suit').toggleClass('visible');
        });

        $('#earrings').on('click', function () {
            event.preventDefault();
            $('.item-earrings').toggleClass('visible');
        });

        $('#dress').on('click', function () {
            event.preventDefault();
            $('.item-dress').toggleClass('visible');
        });

        $('#shirt').on('click', function () {
            event.preventDefault();
            $('.item-shirt').toggleClass('visible');
        });
    }();

    +function () {
        $('.close-tie').on('click', function () {
            event.preventDefault();
            $('.item-tie').removeClass('visible');
        });

        $('.close-suit').on('click', function () {
            event.preventDefault();
            $('.item-suit').removeClass('visible');
        });

        $('.close-earrings').on('click', function () {
            event.preventDefault();
            $('.item-earrings').removeClass('visible');
        });

        $('.close-dress').on('click', function () {
            event.preventDefault();
            $('.item-dress').removeClass('visible');
        });

        $('.close-shirt').on('click', function () {
            event.preventDefault();
            $('.item-shirt').removeClass('visible');
        });
    }();

    // +function () {
    //     $('.type-view span a').on('click', function () {
    //         event.preventDefault();

    //         var $cards = $('.doc-cards');
    //         $cards.css('opacity', '0');
    //         $cards.one('bsTransitionEnd', function (){
    //             $cards.toggleClass('s-cards');
    //             $cards.toggleClass('cards');
    //             $cards.css('opacity', '1');
    //         })
    //         $('.type-view > span').toggleClass('active');
    //     });
    // }();


})(jQuery);