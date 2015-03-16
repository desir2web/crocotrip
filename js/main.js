$(document).ready(function(){
    
    //set all needs heights
    
    function setSize() {
        var scrHi = $(window).height()-40;
        $('.tablecell').css('height',scrHi+'px');
    }
    setSize();
    
    function setSliderSize() {
        var scrHi = $(window).height()-90;
        $('.slide').css('height',scrHi+'px');
    }
    setSliderSize();
    
    //swicth menu appearance
    
    function setMenuTop() {
        var switchPos = $(window).height()-$('.nav').height()-20;
        $(window).on('scroll',function(){
            var curPos = $(window).scrollTop();
            if (curPos > switchPos) {
                if ($('.nav').hasClass('fixed')==false) {
                    $('.nav').addClass('fixed');
                }
            } else {
                if ($('.nav').hasClass('fixed')==true) {
                    $('.nav').removeClass('fixed');
                }
            }
        });
    }
    setMenuTop();

    //watch for window size
    
    $(window).on('resize',function(){
        setSize();
        setSliderSize();
        setMenuTop();
    });
    
    //menu on mobile
    
    $(".menu-toggle").on('click', function(e){
        e.preventDefault();
        $('.nav').addClass('open');
    });
    $('.nav a').on('click',function(e){
        e.preventDefault();
        if ($('.nav').hasClass('open')) {
            $('.nav').removeClass('open');
        }
    });
    
    //trigger click on maps
    
    function showMapInfo() {
        var showPos = $('.team').offset().top;
        $(window).on('scroll',function(){
            var curPos = $(window).scrollTop();
            if (curPos > showPos) {
                $('.ymaps-image').trigger('click');
            } else {
                $('.ymaps-image').trigger('click');
            }
        });
    }
    showMapInfo();
    
    //navigation
    
    function scrolling(position) {
        var speed = 800;
        $('html, body').stop().animate({scrollTop: position}, speed );
    }
    
    $(window).on('load', function(e){
        e.preventDefault();
        var activeScreen = window.location.hash,
            navHeight = 70, //$('.nav').height(),
            blockPosition = $( activeScreen ).offset().top,
            topPos = blockPosition - navHeight;
        scrolling(topPos);
    });
    
    $('.go-to').on('click',  function(e){
        e.preventDefault();
        var goScreen = $(this).attr('href'),
            navHeight = 70, //$('.nav').height(),
            blockPosition = $( goScreen ).offset().top,
            topPos = blockPosition - navHeight;
        scrolling(topPos);
    });

});