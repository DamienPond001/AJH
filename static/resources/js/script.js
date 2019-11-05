$(document).ready(function() {

    //Title fade out on scroll
    $(".js--wp-1").waypoint(function(direction){
        if(direction == 'down'){
            $(".header-row").addClass("animated fadeOut");
        }
        else {
            $(".header-row").removeClass("animated fadeOut");
        }
    },
    {
        offset: '70%;'
    });

    //Cards fade in
    $(".js--wp-1").waypoint(function(direction){
        if(direction == 'down'){
            $(".first-fade").addClass("animated fadeInUp");
        }
    },
    {
        offset: '55%;'
    });

    $(".js--wp-1").waypoint(function(direction){
        if(direction == 'down'){
            $(".second-fade").addClass("animated fadeInUp");
        }
    },
    {
        offset: '50%;'
    });

    $(".js--wp-1").waypoint(function(direction){
        if(direction == 'down'){
            $(".third-fade").addClass("animated fadeInUp");
        }
    },
    {
        offset: '35%;'
    });

    $(".js--wp-1").waypoint(function(direction){
        if(direction == 'down'){
            $(".fourth-fade").addClass("animated fadeInUp");
        }
    },
    {
        offset: '30%;'
    });

});