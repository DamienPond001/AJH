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
				$(".header-row").removeClass("animated fadeIn");
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

	//Logo fade out on scroll
	$(".js--wp-1").waypoint(
		function(direction) {
			if (direction == "down") {
				$(".main-logo").removeClass("animated fadeIn");
				$(".main-logo").addClass("animated fadeOut");
			} else {
				$(".main-logo").removeClass("animated fadeOut");
				$(".main-logo").addClass("animated fadeIn");
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
				$(".primary-nav").css({"display":"none"});
				$(".secondary-nav").css({"display":"block"});
			} else {
				$(".secondary-nav").css({"display":"none"});
				$(".primary-nav").css({"display":"block"});
			}
		},
		{
			offset: "20%;"
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
});
