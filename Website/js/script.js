
$(document).ready(function(){
        $(".hover-trigger").hover(
            function(){
                $(this).siblings(".image-overlay").css({"opacity": "1", "max-height": "800px"});
            },
            function(){
                $(this).siblings(".image-overlay").css({"opacity": "0", "max-height": "0"});
            }
        );
    });

