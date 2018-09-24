$(document).ready (function() {
    new WOW().init();
    $(".header-menu__burger-nav").on("click", function(){

        $(".header-menu__nav").toggleClass("open");

    });

    $('.header-content__imgs').waypoint(function() {

        $('.header-content__imgs').addClass('animated slideInUp');

    }, {
        offset: '70%'
    });

    $('.iphone__on').waypoint(function() {

        $('.iphone__on').addClass('animated fadeIn');

    }, {
        offset: '70%'
    });

    $('.iphone__btn').delay(2300).animate( {bottom: "+=-3"}, 300);
    $('.iphone__btn').delay(300).animate( {top: "+=-3"}, 100);

});

//=========================================

var controller = new ScrollMagic.Controller();

var scene7 = new ScrollMagic.Scene({
    triggerElement: '#hero'
}).setClassToggle('.download', 'animation')
    .addTo(controller);

//==========================================

$('.fade-in').each(function () {

// build  a tween
    var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.5, y: '+=30', ease: Linear.easeNone});

// build a scene
    var scene3 = new ScrollMagic.Scene({
        triggerElement: this
    })
        .setTween(tween)
        .addTo(controller);
});
