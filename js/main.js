$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdwon-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');             
            },
            function() {
                $('.dropdwon-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');               
            });
    });