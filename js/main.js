$(document).ready(function(){
    
    function setSize() {
        var scrHi = $(window).height()-40;
        $('.tablecell').css('height',scrHi+'px');
    }
    function setSliderSize() {
        var scrHi = $(window).height()-90;
        $('.slide').css('height',scrHi+'px');
    }
    
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
     
    //set tablecell height   
    setSize();
    setSliderSize();
    
    //swicth menu appearance
    setMenuTop();
    
    //watch for window size
    
    $(window).on('resize',function(){
        setSize();
        setSliderSize();
        setMenuTop();
    });

    
    //menu on mobile
    
    $(".menu-toggle").on('click', function(){
            $('.nav').addClass('open');
			return false;
    });
    $(".close").on('click', function(){
            $('.nav').removeClass('open');
			return false;
    });

});