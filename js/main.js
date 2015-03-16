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
    
    //mail
    
    function postEmail() {
        $.post( "email.php", $( "#order" ).serialize() );
    }    
    function postTel() {
        $.post( "tel.php", $( "#order" ).serialize() );
    }
    
    $('.submit').on('click', function(e) {
        e.preventDefault();
        $('.requered').each(function() {
            if(!$(this).val().length) {
                $(this).css('border', '#e02525 2px solid');
                $(this).attr("placeholder","Обязательно заполните это поле");
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if(pattern.test($(this).val())) {
                    postEmail();
                } else {
                    postTel();
                }

                $('#order')[0].reset();
                $(this).attr("placeholder","Email или телефон для связи");
                $(this).css('border', '#c0c0c0 2px solid');
                $('.submit').html('Спасибо!');
                $('.submit').removeClass('blue');
                $('.submit').addClass('mint');
                
                setTimeout(function(){
                    $(".submit").html("Отправить");
                    $('.submit').removeClass('mint');
                    $('.submit').addClass('blue');
                }, 3000);
            }
        });
    });

});