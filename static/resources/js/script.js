$(document).ready(function() {
	//Nav icon click event
	$(".nav-icon").click(function() {
		$(".nav-icon").addClass("active");
		$(".nav-item").addClass("active animated fadeInRight");
	});

	//Title fade out on scroll
	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
				$(".header-row").removeClass("animated fadeIn initial");
				$(".header-row").addClass("animated fadeOut");
			} else {
				$(".header-row").removeClass("animated fadeOut");
				$(".header-row").addClass("animated fadeIn");
			}
		},
		{
			offset: "70%;"
		}
    );
    
    //Input field check
    $("input").blur(function(){
        if($(this).val() != '' ){
            $(this).addClass('has-value');
        }
        else{
            $(this).removeClass('has-value');
        }
       
    })

	//Toggle click event
	$(".navbar-toggler").click(function(){
		$(".navbar").toggleClass("open");
	})
	$(".nav-link").click(function(){
		if(window.innerWidth <= 768){
			$(".navbar").toggleClass("open");

		}
	})
    


	//Logo fade out on scroll
	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
				$(".main-logo").removeClass("animated fadeIn");
                $(".main-logo").addClass("animated fadeOut");
                
                $(".section-nav").addClass("scrolled");
			} else {
				$(".main-logo").removeClass("animated fadeOut");
                $(".main-logo").addClass("animated fadeIn");
                
                $(".section-nav").removeClass("scrolled");
			}
		},
		{
			offset: "40%;"
		}
	);

	//nav fade out on scroll
	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
                $(".primary-nav").addClass('out-of-view');
                $(".primary-nav").removeClass('animated fadeIn');
                
				$(".secondary-nav").removeClass('out-of-view animated fadeIn');
				$(".secondary-nav").addClass('animated fadeIn');

            } else {
                $(".secondary-nav").addClass('out-of-view');
                $(".secondary-nav").removeClass('animated fadeIn');

                
                $(".primary-nav").removeClass('out-of-view');
                $(".primary-nav").addClass('animated fadeIn');
			}
		},
		{
			offset: "20%;"
		}
	);

	
	//indicator fade out on scroll
	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
				$(".indicator").removeClass('animated fadeIn');
                $(".indicator").addClass('animated fadeOut');

            } else {
				$(".indicator").removeClass('animated fadeOut');
                $(".indicator").addClass('animated fadeIn');

			}
		},
		{
			offset: "100%;"
		}
	);

	//Cards fade in
	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
				$(".first-fade").addClass("animated fadeInUp");
			}
		},
		{
			offset: "55%;"
		}
	);

	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
				$(".second-fade").addClass("animated fadeInUp");
			}
		},
		{
			offset: "50%;"
		}
	);

	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
				$(".third-fade").addClass("animated fadeInUp");
			}
		},
		{
			offset: "35%;"
		}
	);

	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
				$(".fourth-fade").addClass("animated fadeInUp");
			}
		},
		{
			offset: "30%;"
		}
	);

	    /* Navigation scroll */
		$(function() {
			$('a[href*=#]:not([href=#])').click(function() {
			  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				  $('html,body').animate({
					scrollTop: target.offset().top
				  }, 1000);
				  return false;
				}
			  }
			});
		  });

		  $('.navbar-nav>li>a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
		});

		//Animate indicator
		(function myLoop (i) {          
			setTimeout(function () {  
				console.log(i)
				if(i%5==0){
					$(".indicator i").toggleClass('animated bounce');  
				}           
			   if (--i) myLoop(i);     
			}, 3000)
		 })(107);                        
});
