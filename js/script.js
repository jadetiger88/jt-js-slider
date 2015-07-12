$(document).ready(function() {
	var fadeSpeed = 500;              
	var autoSwitchSpeed = 3000; 
	var autoSwitch = true; 

	// Add the inital active class
	$('.slide').first().addClass('active');
	$('.slide').hide();

	// Show first slide 
	$('.active').show();

	// Show next slide 
	$('#next').on('click', nextSlide);

	// Show previous slide
	$('#prev').on('click', previousSlide);

	// Enable auto switch to next slide
	if (autoSwitch == true) {
		setInterval(nextSlide, autoSwitchSpeed); 
	}

	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(fadeSpeed);
		$('.active').fadeIn(fadeSpeed);

	}

	function previousSlide () {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(fadeSpeed);
		$('.active').fadeIn(fadeSpeed);		
	}

}); 